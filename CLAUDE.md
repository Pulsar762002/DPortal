# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is a monorepo with two independent applications plus orchestration:

- `dungeon-portal/` — Angular 21 frontend (standalone components, SSR/hydration, Tailwind v4, Angular Material). All `ng`/`npm` commands run from **inside this directory**.
- `DungeonPortalSolution/DungonPortalApi/` — .NET (ASP.NET Core minimal API) backend using EF Core + PostgreSQL and JWT auth. Note the misspelling "Dungon" in the folder/namespace path is intentional and must be matched.
- `docker-compose.yml` and `dungeonPortalBuild.sh` (repo root) — **obsolete**: they point to `/home/andrea/...` paths. Do not use them. On this server the stack is defined in `~/foundry-multi/docker-compose.yml` (shared with the FoundryVTT instances, which must not be touched).

The UI, JSON content, and source comments are in **Italian**. Match that language when editing user-facing strings and data files.

## Commands

Frontend (`cd dungeon-portal` first):
- `npm start` / `ng serve` — dev server at http://localhost:4200
- `ng build` — production build into `dist/` (static output, hashed)
- `ng test` — run unit tests via **Vitest** (not Karma/Jasmine despite Angular defaults)
- Run a single spec: `npx vitest run src/app/path/to/file.spec.ts` (or `npx vitest` for watch mode)
- `ng generate component <name>` — scaffolds standalone components; `skipTests` is on by default (no `.spec.ts` generated)
- Prettier config lives in `package.json` (printWidth 100, single quotes, angular parser for `.html`)

Backend (`cd DungeonPortalSolution/DungonPortalApi`):
- `dotnet run` — starts the API; the frontend's `environment.apiUrl` expects it on http://localhost:5000
- `dotnet` is **not installed on the host**. To build or add migrations, use the `mcr.microsoft.com/dotnet/sdk:8.0` image on a copy of the sources, run as your own user so `bin/`/`obj/` don't end up root-owned. Example: `dotnet tool install --tool-path /tmp/tools dotnet-ef --version 8.0.24`, then `/tmp/tools/dotnet-ef migrations add <Name>`, then copy `Migrations/` back.
- The DB schema is managed with **EF Core migrations** (`Migrations/`). `Data/DbInitializer.cs` runs `Migrate()` at startup, after baselining legacy DBs created by the old `EnsureCreated()`. `Data/AppDbContextFactory.cs` is the design-time factory for `dotnet ef`. A seed user `master@dungeonportal.com` / `123456` is inserted if the Users table is empty.

Deploy (API + frontend only), from `~/foundry-multi`:
```
docker exec dungeonportal-db pg_dump -U dungeon dungeonportal > ~/backups/<name>.sql   # backup first
docker compose build dungeon-portal-api dungeonportal-frontend
docker compose up -d --no-deps dungeon-portal-api dungeonportal-frontend
```
Ports: API on host `:5000`, frontend on `:4200`, Postgres on `:5432`. Migrations apply automatically when the API starts.

## Frontend architecture

- **Routing** (`src/app/app.routes.ts`) is fully lazy via `loadComponent`. Two top-level zones: auth routes (`/login`, `/register`) sit *outside* the layout; everything else nests under `ShellComponent` (navbar/topbar/footer). Most routes are protected by `authGuard`, with `roleGuard([...])` for role-gated pages.
- **Folder roles** under `src/app/`: `core/` (singletons — guards, services, interceptor, models), `shared/` (reusable components, story-blocks, models, styles), `layout/` (shell chrome), `features/` (page-level components grouped by audience: `public/`, `master/`, `user/`, `admin/`), `auth/`.
- **Auth** (`core/services/auth.service.ts`): JWT is stored in `localStorage` (`token`, `user`). `auth.interceptor.ts` attaches the bearer token. All localStorage/`window` access is guarded with `typeof window === 'undefined'` checks because the app uses SSR/hydration (`provideClientHydration`) — preserve these guards or SSR will break.
- **Role checks are case-insensitive** by convention (`role.guard.ts` lowercases both sides). Roles seen in code: `USER`, `MASTER`, `ADMIN`. Note `app.routes.ts` mixes `'Master'`/`'Admin'` and `'ADMIN'` casing — the guard normalizes this, so don't "fix" the casing assuming it's a bug.

### Story-block content system

Campaign session pages are **data-driven**, not hardcoded. The content is served by the **API**, not by Angular's static assets:
1. `DynamicSessionService.getSession(slug, sessionId)` calls `GET /api/sessioni/{slug}/{n}`. The API reads `content/sessioni/<slug>/session-<n>.json` via `SessioneStorageService`.
   - The endpoint requires login.
   - Users who don't pass `CampagnaOwnershipService.CanAccessVideoAsync` (ADMIN, campaign master, participants) get the session with the `videoId`s stripped.
2. A session JSON is a `CampaignSession` (`shared/models/campaign-session.model.ts`): `title`, `videoId`, and `chapters[]`, each with a `blocks[]` array of `StoryBlock`s.
   - The backend treats chapters/blocks as **opaque JSON**; their structure is defined only on the Angular side.
3. `StoryBlock` (`core/models/story-block.model.ts`) is a discriminated union on `type`:
   - Plain elements: `paragraph`, `quote`, `image` (variant `left`/`left-small`/`left-big`/`center`).
   - Standalone components in `shared/story-blocks/`: `subtitle`, `scene` (full-width establishing shot with overlaid title), `divider` (ornamental separator), `note` (Master's aside), `list`, `spacer`.
   - Rendering is a `*ngIf` chain over `block.type` in `shared/story-blocks/story-blocks/story-blocks.component.ts` (`<app-story-blocks [blocks]="...">`). The session page, the Archivi viewer and the editors all use this one component.
   - **To add a new block type:** add it to the union, create its component there, and add one `*ngIf` branch in `story-blocks.component.html`. That template is the single source of truth: there is no separate dispatcher. The editor form is in `shared/story-blocks/story-block-form`.
4. `content/sessioni/<slug>/elenco-sessioni.json` drives the campaign page/index (`GET /api/sessioni/{slug}/elenco`).
   - It also contains non-session sections (Personaggi, Luoghi, ...).
   - The API only edits the section with `type == "sessions"` (items with `sessionNumber`, `label`, `visible`) and leaves the rest untouched.
5. Block `text` may contain HTML, rendered via `TextRenderService.render()` with `bypassSecurityTrustHtml`. It is authored content (master/admin), not user input.

**Editing content:** use the master editors (`features/master/`: `sessione-editor`, `archivio-editor`, `come-si-gioca-editor`, `cronache-editor`). They call `/api/sessioni`, `/api/archivi` and `/api/come-si-gioca`, and require MASTER/ADMIN plus `CanWriteAsync` on the campaign. No code change or rebuild is needed.
- On disk, the content lives in `DungeonPortalSolution/DungonPortalApi/content/` (`sessioni/`, `archivi/`, `come-si-gioca/`, `campagne/<slug>/immagini` for covers), bind-mounted into the container at `/app/content` and served statically under `/content`. **It is live data:** do not delete or overwrite it during builds.
- Still static (Angular `src/assets/data/ikaros/campagne/discesa-averno/`): the Discesa nell'Averno lore pages (`personaggi.json`, `luoghi.json`, `eventi.json`, gallery, graph), read by `features/public/campagne/discesa-averno/campagna-data.service.ts`. Changing them requires rebuilding the frontend. These are campaign NPCs/lore and have nothing to do with the players' `Personaggio` entities in the DB.

## Backend notes

- Minimal API. `Program.cs` only wires middleware and calls `app.Map*Endpoints()`. The endpoints live in `Endpoints/*Endpoints.cs` (Auth, User, Admin, Land, Campagna, Personaggio, Sessione, Archivio, ComeSiGioca). DI registration is in `Extensions/ServiceCollectionExtensions.cs`.
- Main entities (`Models/`):
  - `User`: `Nickname` is the **player alias**, not a character.
  - `Land` / `LandMaster`: co-masters of a Land.
  - `Campagna`: owned by `MasterUserId`.
  - `CampagnaPartecipante`: GIOCATORE/INVITATO/MASTER, unique per (campagna, user).
  - `Personaggio`: a user's player characters, N per user, with an optional `CampagnaId` that is set to null when the campaign is deleted.
- Session/archive *content* is file-based under `content/`, not stored in the DB (`*StorageService`). Write permissions on a campaign go through `CampagnaOwnershipService.CanWriteAsync` (ADMIN or campaign master). Video access goes through `CanAccessVideoAsync`, which also lets participants in.
- Personaggi: the owner manages them from Profile (`shared/components/personaggi-gestione`, also reused in Admin → Campagne). The owner can only assign a character to campaigns they take part in; the campaign master/ADMIN can create characters for any user, and the user is automatically added as GIOCATORE. Create/update requests are multipart (`avatar` file + fields).
- CORS `FrontendPolicy` whitelists specific origins (localhost:4200, a public IP, and the duckdns host) — add new frontend origins there.
- Avatar uploads (`AvatarService`) are written to `uploads/` on disk and served statically under `/uploads`. `AvatarUrl` stores a relative path: user avatars go in `users/{id}/avatars`, character avatars in `users/{id}/personaggi`. **Warning:** in production the `/app/uploads` volume is mounted from `~/portals/DungeonPortalSolution/uploads` (the old copy of the solution), NOT from this repo's `DungeonPortalSolution/uploads`.
- JWT signing key comes from config (`Jwt:Key`); in compose it's passed via `Jwt__Key`.

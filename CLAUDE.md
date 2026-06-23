# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is a monorepo with two independent applications plus orchestration:

- `dungeon-portal/` — Angular 21 frontend (standalone components, SSR/hydration, Tailwind v4, Angular Material). All `ng`/`npm` commands run from **inside this directory**.
- `DungeonPortalSolution/DungonPortalApi/` — .NET (ASP.NET Core minimal API) backend using EF Core + PostgreSQL and JWT auth. Note the misspelling "Dungon" in the folder/namespace path is intentional and must be matched.
- `docker-compose.yml` (repo root) — orchestrates Postgres + API + frontend together. The commented-out `foundryN` services are FoundryVTT instances, not part of the app.

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
- The DB schema is created at startup via `db.Database.EnsureCreated()` (no migrations). A seed user `master@dungeonportal.com` / `123456` is inserted if the Users table is empty.

Full stack: `docker-compose up` from the repo root (API published on host `:5000`, frontend on `:4200`, Postgres on `:5432`).

## Frontend architecture

- **Routing** (`src/app/app.routes.ts`) is fully lazy via `loadComponent`. Two top-level zones: auth routes (`/login`, `/register`) sit *outside* the layout; everything else nests under `ShellComponent` (navbar/topbar/footer). Most routes are protected by `authGuard`, with `roleGuard([...])` for role-gated pages.
- **Folder roles** under `src/app/`: `core/` (singletons — guards, services, interceptor, models), `shared/` (reusable components, story-blocks, models, styles), `layout/` (shell chrome), `features/` (page-level components grouped by audience: `public/`, `master/`, `user/`, `admin/`), `auth/`.
- **Auth** (`core/services/auth.service.ts`): JWT is stored in `localStorage` (`token`, `user`). `auth.interceptor.ts` attaches the bearer token. All localStorage/`window` access is guarded with `typeof window === 'undefined'` checks because the app uses SSR/hydration (`provideClientHydration`) — preserve these guards or SSR will break.
- **Role checks are case-insensitive** by convention (`role.guard.ts` lowercases both sides). Roles seen in code: `USER`, `MASTER`, `ADMIN`. Note `app.routes.ts` mixes `'Master'`/`'Admin'` and `'ADMIN'` casing — the guard normalizes this, so don't "fix" the casing assuming it's a bug.

### Story-block content system

Campaign session pages are **data-driven**, not hardcoded. The flow:
1. `DynamicSessionService.getSession(slug, sessionId)` fetches `assets/data/ikaros/campagne/<slug>/sessioni/session-<id>.json` over HTTP (static asset, no backend).
2. A session JSON is a `CampaignSession` (`shared/models/campaign-session.model.ts`): `chapters[]`, each with a `blocks[]` array of `StoryBlock`s.
3. `StoryBlock` (`core/models/story-block.model.ts`) is a discriminated union on `type`: `paragraph`, `quote`, `subtitle`, `image` (variant `left`/`left-small`/`left-big`/`center`), `scene` (full-width establishing shot with overlaid title), `divider` (ornamental separator), `note` (Master's aside), `list` and `spacer`. The rendering is a `*ngIf` chain over `block.type` in `shared/story-blocks/story-blocks/story-blocks.component.ts` (`<app-story-blocks [blocks]="...">`): `paragraph`/`quote`/`image` are plain elements, while `subtitle`/`scene`/`divider`/`note`/`list`/`spacer` are standalone components in `shared/story-blocks/`. Both `dynamic-session.component.html` and the Archivi viewer consume this one component. **To add a new block type: add it to the union, create its component there, and add one `*ngIf` branch in `story-blocks.component.html`** — that template is the single source of truth (there is no separate dispatcher).
4. `elenco-sessioni.json` drives the session index/listing (sections with `items`, each having `sessionNumber` and a `visible` flag).
5. Block `text` may contain HTML, rendered via `TextRenderService.render()` which uses `bypassSecurityTrustHtml` — content is trusted authored data, not user input.

**To add or edit campaign content, edit the JSON files under `src/assets/data/ikaros/campagne/<slug>/` and matching images under `luoghi/`, `personaggi/`, etc.** — no code change is needed for new sessions.

## Backend notes

- Entire API is defined inline in `Program.cs` as minimal-API endpoint mappings (auth, user profile, admin user management). `Data/AppDbContext.cs`, `Models/User.cs`, `Services/JwtService.cs` are the only supporting types.
- CORS `FrontendPolicy` whitelists specific origins (localhost:4200, a public IP, and the duckdns host) — add new frontend origins there.
- Avatar uploads are written to `uploads/` on disk and served statically under `/uploads`. `AvatarUrl` stores a relative path.
- JWT signing key comes from config (`Jwt:Key`); in compose it's passed via `Jwt__Key`.

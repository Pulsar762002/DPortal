# DPortal — Le Cronache dell'Averno

Portale web per campagne di Dungeons & Dragons: raccoglie le **cronache delle
sessioni**, i personaggi, i luoghi e gestisce utenti e ruoli. Le sessioni sono
scritte come pagine narrative "scenografiche", composte da blocchi.

## Architettura

Monorepo con due applicazioni indipendenti orchestrate via Docker:

| Cartella | Cos'è |
|---|---|
| `dungeon-portal/` | Frontend **Angular 21** (standalone components, SSR/hydration, Tailwind v4, Angular Material) |
| `DungeonPortalSolution/DungonPortalApi/` | Backend **.NET 8** (minimal API) con **EF Core + PostgreSQL** e autenticazione **JWT** |
| `docker-compose.yml` | Orchestrazione di Postgres + API + frontend |

> Nota: l'interfaccia e i contenuti sono in **italiano**.

## Avvio rapido

### Tutto con Docker
```bash
docker compose up
```
- Frontend → http://localhost:4200
- API → http://localhost:5000 (Swagger su `/swagger`)
- PostgreSQL → porta 5432

### Sviluppo locale

**Frontend** (porta 4200):
```bash
cd dungeon-portal
npm install
npm start            # = ng serve
```

**Backend** (porta 5000, richiede un PostgreSQL — es. `docker compose up postgres`):
```bash
cd DungeonPortalSolution/DungonPortalApi
dotnet run
```
Allo startup il DB viene migrato automaticamente (EF Core, con baseline per DB
preesistenti) e viene creato un utente seed: **master@dungeonportal.com** / `123456`.

## Contenuti: le cronache a blocchi

Le sessioni **non sono codice**: sono file JSON statici sotto
`dungeon-portal/src/assets/data/ikaros/campagne/<campagna>/sessioni/`.

Una sessione (`session-<N>.json`) è fatta di capitoli, ognuno con una sequenza di
**blocchi narrativi** (`StoryBlock`). Il rendering avviene in
`dynamic-session.component.html`.

### Tipi di blocco

| `type` | Descrizione | Campi |
|---|---|---|
| `paragraph` | Paragrafo (può contenere HTML) | `text`, `variant: emphasis`, `style: italic` |
| `subtitle` | Sotto-titolo | `text` |
| `quote` | Citazione | `text`, `author?` |
| `image` | Immagine | `src`, `variant: left \| left-small \| left-big \| center`, `alt?` |
| `scene` | Establishing shot a tutta larghezza con titolo sovrimpresso | `src`, `title?`, `subtitle?` |
| `divider` | Separatore ornamentale | `variant: flourish \| rune \| plain` |
| `note` | "Nota del Master" (aside) | `text`, `title?` |
| `list` | Elenco | `items[]`, `variant: bullet \| number` |
| `spacer` | Spazio verticale | `variant: small \| medium \| large` |

### Aggiungere una sessione
1. Crea `sessioni/session-<N>.json` (vedi `session-18.json` come scheletro/catalogo).
2. Aggiungi la voce in `sessioni/elenco-sessioni.json`:
   `{ "label": "Sessione N", "sessionNumber": N, "visible": true }`.
3. (Opzionale) Metti le immagini in `luoghi/sessione-<N>/`.

I file sessione referenziano `session.schema.json` (`"$schema"`): aprendoli in un
IDE compatibile (JetBrains, VS Code) ottieni **autocompletamento e validazione**
dei blocchi.

## Comandi utili

Frontend (in `dungeon-portal/`):
```bash
npm start            # dev server
ng build             # build di produzione (statica, in dist/)
ng test              # unit test con Vitest
```

Backend (in `DungeonPortalSolution/DungonPortalApi/`):
```bash
dotnet run
dotnet ef migrations add <Nome>   # nuova migrazione (richiede il tool dotnet-ef)
```

## Stack

- **Frontend**: Angular 21, Tailwind CSS v4, Angular Material, RxJS, Vitest
- **Backend**: .NET 8 (minimal API), EF Core, Npgsql, JWT, BCrypt
- **Infra**: PostgreSQL 16, Docker Compose

## Documentazione

`CLAUDE.md` contiene note architetturali di dettaglio (struttura, comandi,
sistema dei blocchi, backend).

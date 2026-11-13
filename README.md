# Next.js + TypeScript + Tailwind + Prisma Template

Modern fullstack template: **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Prisma** (PostgreSQL). Suited for brochure sites, admin back-offices, and forms with server actions.

---

## Stack

- [Next.js](https://nextjs.org/) 15 — App Router, Turbopack in dev
- [TypeScript](https://www.typescriptlang.org/) — Strict mode, path alias `@/*` → `src/*`
- [Tailwind CSS](https://tailwindcss.com/) — Layout and responsive; visual styles in component CSS files with design tokens
- [Prisma](https://www.prisma.io/) — PostgreSQL ORM
- [Zod](https://zod.dev/) — Schema validation (e.g. server actions)
- ESLint + Prettier — Lint and format

---

## Setup

### Prerequisites

- Node.js 18.18+ (minimum required by Next.js, Prisma and ESLint; developed and tested with Node 20)
- PostgreSQL (for database mode)

### Install and run

```bash
npm install
npm run dev
```

Or with pnpm:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Database (optional)

The app can run in **static** mode (no DB) or **database** mode. Default mode is **static** (`DATA_MODE=static`) if no environment variable is set.

1. Create a `.env` file:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/your_db"
   ```

2. Generate the Prisma client and apply migrations:

   ```bash
   npm run build
   # or
   npx prisma migrate deploy
   ```

3. To use the database for data (news, testimonials, etc.), set:

   ```env
   DATA_MODE=db
   # or
   NEXT_PUBLIC_DATA_MODE=db
   ```

4. Seed the database (optional):

   ```bash
   npm run db:seed
   ```

   To run seed automatically when building (e.g. CI), set `SEED_ON_BUILD=true` and use `npm run seed:if` in your build pipeline.

---

## Data mode

The template supports two modes:

- `static` (default): data comes from `src/data/`
- `db`: data comes from PostgreSQL via Prisma

Switch with:

```env
DATA_MODE=db
```

## Environment variables

Define them in a `.env` file (never commit it).

| Variable                         | Required                        | Description                                                                                                                                          |
| -------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`                   | Database mode, migrations, seed | PostgreSQL connection string                                                                                                                         |
| `DATA_MODE`                      | No (default `static`)           | `static` or `db` (`NEXT_PUBLIC_DATA_MODE` is also read)                                                                                              |
| `JWT_SECRET`                     | Authentication (login, admin)   | Secret used to sign JWTs; the app throws when the auth module is loaded without it                                                                   |
| `ADMIN_SEED_PASSWORD`            | `npm run db:seed`               | Password of the seeded admin user; the seed fails without it                                                                                         |
| `NEXT_PUBLIC_SITE_URL`           | Production (SEO)                | Public site URL, without trailing slash (canonicals, Open Graph, sitemap, robots); defaults to a placeholder domain; must be set at build time       |
| `SEED_ON_BUILD`                  | No                              | `true` makes `npm run seed:if` run the seed                                                                                                          |
| `BREVO_API_KEY`                  | Email sending                   | Brevo API key; without it, emails are skipped and a warning is logged                                                                                |
| `MAIL_SENDER_EMAIL`              | Email sending                   | Sender address (must be a sender/domain validated in Brevo); without it, emails are skipped                                                          |
| `ADMIN_NOTIFICATION_EMAIL`       | Email sending                   | Recipient of admin notifications (reservations; fallback for contact and recruitment); also displayed as the contact address on the reservation page |
| `CONTACT_NOTIFICATION_EMAIL`     | No                              | Overrides the recipient of contact form notifications                                                                                                |
| `RECRUITMENT_NOTIFICATION_EMAIL` | No                              | Overrides the recipient of job application notifications                                                                                             |

## Customize the template

Placeholders to replace before publishing a site (search for `exemple.com` in `src/` and `public/`):

- **Domain**: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.mysite.com`). It drives `metadataBase`, canonicals, Open Graph, `/sitemap.xml` and `/robots.txt`. Edit the page list in `src/app/sitemap.ts` if needed. The sample URLs in `src/data/news.ts` are demo data.
- **Social image**: add `public/og-image.jpg` (1200×630), referenced by the Open Graph and Twitter metadata.
- **Contact details and legal text**: `contact@exemple.com` and `www.exemple.com` in `src/screens/legal/` (`ImprintScreen`, `PolicyScreen`, `TermScreen`).
- **Titles**: the "Nom de la société" / "Nom entreprise" placeholders in each page's `metadata.title`.

## Scripts

| Script         | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `dev`          | Start dev server with Turbopack                                   |
| `build`        | Run `prisma generate` then `next build`                           |
| `start`        | Start production server                                           |
| `lint`         | Run ESLint on `.ts` / `.tsx`                                      |
| `lint:fix`     | ESLint with auto-fix                                              |
| `format`       | Prettier: format all files                                        |
| `check-format` | Prettier: check only (no write)                                   |
| `check-types`  | TypeScript check (`tsc --noEmit`)                                 |
| `db:deploy`    | Apply Prisma migrations (`prisma migrate deploy`)                 |
| `db:seed`      | Run Prisma seed (`prisma db seed`)                                |
| `seed:if`      | Run seed only if `SEED_ON_BUILD=true` (via `scripts/seed-if.mjs`) |

`postinstall` runs `prisma generate` so the client is available after install.

---

## Project overview

- **Routes**: App Router only under `src/app/`. Public site under `(site)/`, admin under `admin/` (protected by `requireAdminApp`).
- **Screens**: Page-level UI components live in `src/screens/` and follow the `*Screen.tsx` naming convention.  
  They are imported by `src/app/**/page.tsx`.  
  Screens do not perform data fetching, routing, or direct Prisma access.
- **Server Sections**: Data fetching is handled exclusively by async Server Components (e.g. `*SectionServer.tsx`, `*TeaserServer.tsx`) or directly in `app/**/page.tsx`. Screens never fetch data.
- **Components**: Reusable UI in `src/components/` (by feature/type). Styling rule: **Tailwind for layout and responsive**, **CSS files for visual styles** (colors, borders, states) using design tokens from `src/app/globals.css`.
- **Server**: Guards in `src/server/guards/`, repositories in `src/server/repositories/`, services in `src/server/services/`. Server adapters (`*.server.ts`) switch between static data (`src/data/`) and DB via `config/dataMode.ts`.
- **Forms**: Server actions in `actions.ts` next to the route; validation with Zod; actions call services (e.g. mail, reservations).
- The Pages Router is not used in this template.

For strict project rules and conventions, see **`docs/RULES.md`**. For architecture, folders, and data flows, see **`docs/ARCHITECTURE.md`**.

---

## Hydration warnings

Next.js may report hydration mismatches for attributes like `data-gramm` or `cz-shortcut-listen` injected by browser extensions. These are usually not bugs in the app. Test in a private window or with extensions disabled to confirm.

---

## Deploy

Build and run in production:

```bash
npm run build
npm run start
```

For hosted deployment (e.g. [Vercel](https://vercel.com/)), set `DATABASE_URL` and optionally `DATA_MODE=db` and `SEED_ON_BUILD` as needed.

---

## Licence

MIT.

# AGENTS.md

Reusable Next.js (App Router) + React + TypeScript + Tailwind CSS + Prisma (PostgreSQL) template.

This file is the single source of truth for AI coding agents (`CLAUDE.md` imports it). The detailed rules live in the documentation listed below, not here.

Path alias: `@/*` → `src/*`.

Dependency versions are defined in `package.json`, which is the source of truth. Node.js 24.x is required (`engines.node`).

## Reference Documentation

Read the relevant documentation before making any code changes:

- `docs/RULES.md` — development rules (styling, naming conventions, server layers, authentication, commits).
- `docs/ARCHITECTURE.md` — directory structure, data flows, authentication, and styling architecture.
- `README.md` — installation, configuration, data modes, scripts, and deployment.

Follow the documented conventions.

If the documentation conflicts with the actual implementation, report the inconsistency before making changes.

## Commands

- Development: `npm run dev`
- Production build: `npm run build` (includes `prisma generate`)
- TypeScript validation: `npm run check-types`
- ESLint validation: `npm run lint`
- Formatting validation: `npm run check-format`
- Prisma client generation: `npx prisma generate` (needed once after `npm install` if install scripts are blocked)
- Database migrations: `npm run db:deploy`
- Database seeding: `npm run db:seed` (non-destructive and idempotent, requires `ADMIN_SEED_PASSWORD`)
- Test database reset: `npm run db:seed:reset -- --confirm-reset` is **destructive**. Never run it without explicit approval, and never against a real or production database.

Before completing a task, run the relevant validation commands (`check-types`, `lint`, `check-format`, `build`).

There are currently no automated tests in the repository.

## Core Development Rules

Detailed rules are defined in `docs/RULES.md`.

- Preserve the existing architecture. Any architectural changes, new dependencies, or new patterns must be justified and approved before implementation.
- Server architecture: Server Action / Server Component → `*.server.ts` / `*.service.ts` → `*.repo.ts` → Prisma.
- Prisma must only be accessed through repositories. The only exception is read-only access from the authentication guards (see `docs/RULES.md`, section 5).
- `src/screens/*Screen.tsx` components are responsible for UI composition only and must not fetch data.
- Data fetching belongs in `page.tsx` or `*Server.tsx` components.
- Use Tailwind CSS for layout and responsive design.
- Use co-located CSS files for colors, borders, typography, visual effects, and interactive states.
- Use design tokens defined in `src/app/globals.css`. Avoid hardcoded hexadecimal colors.
- Do not add Tailwind color classes on the public site. In the administration they are allowed but not required.
- Scroll-reveal animations use the primitives in `src/components/animations/` (`Reveal`, `RevealGroup` / `RevealItem`, `useGatedInView`) with the constants from `src/lib/motion.ts`. Use one animation layer per element and never nest primitives on the same content.
- Server Actions must be defined in `actions.ts` near their corresponding routes, validate inputs with Zod, call the appropriate services, and use `redirect()` when necessary.
- Server Actions that mutate admin data must start with `await requireAdminApp();`.
- Use the App Router exclusively. The Pages Router is not allowed.
- Use the existing authentication guards: `requireAuthApp` and `requireAdminApp`.
- Follow Conventional Commits: `type(scope): message`, with one logical change per commit.

## Important Considerations

### Data Modes

The template supports two data modes:

- `static`: static data (default).
- `db`: database-backed data.

Data mode selection relies on `DATA_MODE` / `NEXT_PUBLIC_DATA_MODE`.

The `*.server.ts` adapters use `IS_DB`, defined in `src/config/dataMode.ts`. Static-only features (for example portfolio projects) read `src/data/` directly in both modes.

Always preserve compatibility with both data modes.

### Next.js

The project uses Next.js 16 with Turbopack (dev and build) and an ESLint flat config (`eslint.config.mjs`).

`next.config.ts` sets `agentRules: false` so that `next dev` does not rewrite this file. Do not remove that setting without checking.

### Prisma

The project uses Prisma 7 with the `prisma-client` generator and the PostgreSQL driver adapter (`@prisma/adapter-pg`).

- Configuration is in `prisma.config.ts` (schema, migrations, seed command, datasource URL). Prisma 7 does not load `.env` by itself.
- The generated client is written to `src/generated/prisma/` (git-ignored). Never edit these files manually.
- Import models, enums, the `Prisma` namespace and `PrismaClient` from `@/generated/prisma/client`.
- The application client is created in `src/lib/prisma.ts`; the seed scripts use `createPrismaClient()` from `prisma/seed-shared.ts`.
- Do not modify models or relations in `prisma/schema.prisma` without justification.

### Environment Variables

`.env` files contain sensitive information.

Never expose their contents, include secrets in responses, or commit them to version control.

Never execute destructive database migrations or seeds without explicit approval.

## Dependency Updates and Migrations

For any significant dependency update or technical migration:

1. Inspect the current dependency versions and project configuration.
2. Consult the official migration guides and documentation.
3. Identify breaking changes, incompatibilities, and potential risks.
4. Present a migration plan before modifying the code.
5. Request approval before implementing major changes.
6. Apply changes incrementally, in logically grouped steps.
7. Validate the application after each step, in both `static` and `db` modes.

Additional rules:

- Preserve existing functionality and compatibility with both `static` and `db` modes.
- Never run `npm audit fix --force` without explicit approval.
- Never suppress TypeScript or ESLint errors merely to make the build pass.
- Avoid unrelated changes.
- Update project documentation whenever architecture or conventions change.

## Communication

- Always communicate with the user in French, even though this file is written in English.
- Briefly explain important technical decisions.
- Clearly report risks, limitations, and trade-offs.
- Prefer simple, maintainable, and reusable solutions.
- Never implement major changes without prior approval.
- Never commit automatically: let the user review the changes first.

# CLAUDE.md

Reusable Next.js (App Router) + React + TypeScript + Tailwind CSS + Prisma (PostgreSQL) template.

Path alias: `@/*` → `src/*`.

Dependency versions are defined in `package.json`, which is the source of truth.

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
- Database migrations: `npm run db:deploy`
- Database seeding: `npm run db:seed` (requires `ADMIN_SEED_PASSWORD`)

Before completing a task, run the relevant validation commands.

There are currently no automated tests in the repository.

## Core Development Rules

Detailed rules are defined in `docs/RULES.md`.

- Preserve the existing architecture. Any architectural changes, new dependencies, or new patterns must be justified and approved before implementation.
- Server architecture: Server Action / Server Component → `*.server.ts` / `*.service.ts` → `*.repo.ts` → Prisma.
- Prisma must only be accessed through repositories.
- `src/screens/*Screen.tsx` components are responsible for UI composition only and must not fetch data.
- Data fetching belongs in `page.tsx` or `*Server.tsx` components.
- Use Tailwind CSS for layout and responsive design.
- Use co-located CSS files for colors, borders, typography, visual effects, and interactive states.
- Use design tokens defined in `src/app/globals.css`. Avoid hardcoded hexadecimal colors.
- Server Actions must be defined in `actions.ts` near their corresponding routes, validate inputs with Zod, call the appropriate services, and use `redirect()` when necessary.
- Use the App Router exclusively. The Pages Router is not allowed.
- Use the existing authentication guards: `requireAuthApp` and `requireAdminApp`.
- Follow Conventional Commits: `type(scope): message`, with one logical change per commit.

## Important Considerations

### Data Modes

The template supports two data modes:

- `static`: static data (default).
- `db`: database-backed data.

Data mode selection relies on `DATA_MODE` / `NEXT_PUBLIC_DATA_MODE`.

The `*.server.ts` adapters use `IS_DB`, defined in `src/config/dataMode.ts`.

Always preserve compatibility with both data modes.

### Prisma

The `src/generated/prisma/` directory contains generated code.

Never edit these files manually.

### Environment Variables

`.env` files contain sensitive information.

Never expose their contents, include secrets in responses, or commit them to version control.

Never execute destructive database migrations without explicit approval.

## Dependency Updates and Migrations

For any significant dependency update or technical migration:

1. Inspect the current dependency versions and project configuration.
2. Consult the official migration guides and documentation.
3. Identify breaking changes, incompatibilities, and potential risks.
4. Present a migration plan before modifying the code.
5. Request approval before implementing major changes.
6. Apply changes incrementally, in logically grouped steps.
7. Validate the application after each step.

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

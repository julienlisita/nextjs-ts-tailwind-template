# Next.js + TypeScript + Tailwind + Prisma Template

🚀 Base de projet moderne pour créer rapidement des applications web fullstack avec **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, et **Prisma** (PostgreSQL).

## Stack technique

- [Next.js](https://nextjs.org/) 15 — App Router, SSR/SSG/ISR
- [TypeScript](https://www.typescriptlang.org/) — Typage strict
- [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS
- [Prisma](https://www.prisma.io/) — ORM pour PostgreSQL
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — Qualité de code
- [Zod](https://zod.dev/) — Validation des schémas

## Démarrage

Clonez ce repo, installez les dépendances, puis lancez le serveur de dev :

```bash
pnpm install
pnpm dev
```

Ou avec npm :

```bash
npm install
npm run dev
```

Accédez à [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

- `dev` — lance le serveur de dev Next.js
- `build` — build en production
- `start` — démarre l’app en mode production
- `lint` — exécute ESLint
- `typecheck` — vérifie le typage TypeScript
- `prisma migrate dev` — applique les migrations Prisma en dev
- `prisma studio` — ouvre Prisma Studio pour explorer la BDD

## Structure du projet

```
app/               # Pages et layouts (App Router)
src/
  components/      # Composants UI réutilisables
  lib/             # Fonctions utilitaires (auth, db, etc.)
  styles/          # Styles globaux
  prisma/          # Schéma et migrations
```

## Base de données

Le projet utilise **PostgreSQL**.  
Configurez l’URL de connexion dans `.env` :

```
DATABASE_URL="postgresql://user:password@localhost:5432/ma_base"
```

Exécutez la première migration :
```bash
pnpm prisma migrate dev --name init
```

## Notes sur les warnings d’hydratation

Parfois, Next.js affiche un warning :

```
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties...
```

➡️ Ce warning apparaît souvent à cause d’**extensions navigateur** (par ex. `cz-shortcut-listen`, `data-gramm`).  
Dans ce cas, ce n’est pas un bug du code. Testez en **navigation privée** pour confirmer.

## Déploiement

Le plus simple est de déployer sur [Vercel](https://vercel.com/), l’équipe derrière Next.js.

## Licence

MIT — libre d’utilisation et de modification.
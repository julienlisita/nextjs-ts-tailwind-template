// prisma.config.ts

import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    // `?? ''` : `prisma generate` (postinstall, build) ne doit pas échouer quand DATABASE_URL est absente
    url: process.env.DATABASE_URL ?? '',
  },
});

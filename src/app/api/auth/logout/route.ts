// src/app/api/auth/logout/route.ts

import { logoutHandler } from '@/server/controllers/auth.controller';

export async function POST() {
  return logoutHandler();
}

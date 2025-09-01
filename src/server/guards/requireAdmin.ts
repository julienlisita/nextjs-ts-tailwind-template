// src/server/guards/Admin.ts

import { redirect } from 'next/navigation';
import { requireAuth } from './requireAuth';

export async function requireAdmin() {
  const user = await requireAuth();
  if (user.role !== 'ADMIN') redirect('/'); // ou '/login' / page 403
  return user;
}

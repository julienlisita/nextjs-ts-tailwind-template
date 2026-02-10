// src/server/guards/requireAdmin.ts

import { redirect } from 'next/navigation';
import { userRepo } from '@/server/repositories/user.repo';
import { requireAuthApp } from './requireAuth.app';

export async function requireAdmin() {
  const session = await requireAuthApp(); // { userId, role }

  if (session.role !== 'ADMIN') redirect('/');

  const user = await userRepo.findById(session.userId);

  if (!user) redirect('/login');

  return {
    userId: user.id,
    role: user.role,
    name: user.name ?? null,
    email: user.email,
  };
}

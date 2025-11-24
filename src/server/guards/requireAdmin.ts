// src/server/guards/requireAdmin.ts

import { redirect } from 'next/navigation';
import { requireAuth } from './requireAuth';
import { userRepo } from '@/server/repositories/user.repo';

export async function requireAdmin() {
  const session = await requireAuth(); // { userId, role }

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

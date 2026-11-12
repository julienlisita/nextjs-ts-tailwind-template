// src/server/guards/requireAdmin.app.ts

import { redirect } from 'next/navigation';
import { requireAuthApp } from './requireAuth.app';
import { userRepo } from '@/server/repositories/user.repo';

export async function requireAdminApp() {
  const session = await requireAuthApp(); // { userId, role }

  // Sortie rapide : un token non-admin n'a pas besoin d'aller en base.
  if (session.role !== 'ADMIN') redirect('/');

  // La base fait foi : le compte doit exister et être toujours ADMIN
  // (un admin supprimé ou rétrogradé perd l'accès sans attendre l'expiration du token).
  const user = await userRepo.findById(session.userId);
  if (!user) redirect('/login');
  if (user.role !== 'ADMIN') redirect('/');

  return {
    userId: user.id,
    role: user.role,
    name: user.name ?? null,
    email: user.email,
  };
}

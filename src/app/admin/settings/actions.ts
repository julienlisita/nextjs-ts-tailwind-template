// src/app/admin/settings/actions.ts

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/jwt';
import { authCookieName } from '@/lib/auth-cookies';
import { changePassword, updateProfile } from '@/server/services/user.service';

// Schéma pour changement de mot de passe
const passwordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
});

// Schéma pour mise à jour du profil (nom + email)
const profileSchema = z.object({
  name: z.string().min(2, 'Nom trop court').max(100).optional().or(z.literal('')),
  email: z.string().email('Email invalide'),
});

async function getCurrentUserId() {
  const cookieStore = await cookies();
  const token = cookieStore.get(authCookieName)?.value;
  if (!token) throw new Error('UNAUTHENTICATED');

  const { userId } = verifyToken(token) as { userId: number; role: 'ADMIN' | 'USER' };
  return userId;
}

export async function changePasswordAction(formData: FormData) {
  const data = passwordSchema.parse({
    currentPassword: formData.get('currentPassword'),
    newPassword: formData.get('newPassword'),
  });

  const userId = await getCurrentUserId();
  await changePassword(userId, data);

  // on revalide bien la bonne page
  revalidatePath('/admin/settings');
}

export async function updateProfileAction(formData: FormData) {
  const data = profileSchema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  const userId = await getCurrentUserId();
  await updateProfile(userId, { email: data.email, name: data.name });

  revalidatePath('/admin/settings');
}

// src/app/(settings)/actions.ts

'use server';

import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/jwt';
import { authCookieName } from '@/lib/auth-cookies';
import { userRepo } from '@/server/repositories/user.repo';

const schema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
});

export async function changePasswordAction(formData: FormData) {
  const data = schema.parse({
    currentPassword: formData.get('currentPassword'),
    newPassword: formData.get('newPassword'),
  });

  const cookieStore = await cookies();
  const token = cookieStore.get(authCookieName)?.value;
  if (!token) throw new Error('UNAUTHENTICATED');

  const { userId } = verifyToken(token) as { userId: number; role: 'ADMIN' | 'USER' };
  const user = await userRepo.findById(userId);
  if (!user) throw new Error('USER_NOT_FOUND');

  const ok = await bcrypt.compare(data.currentPassword, user.password);
  if (!ok) throw new Error('INVALID_CURRENT_PASSWORD');

  const hash = await bcrypt.hash(data.newPassword, 12);
  await userRepo.updatePassword(userId, hash);

  revalidatePath('/settings');
}

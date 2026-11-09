// src/server/services/user.service.ts

import bcrypt from 'bcryptjs';
import { userRepo } from '../repositories/user.repo';

export const getUserById = (id: number) => userRepo.findById(id);

export async function changePassword(
  userId: number,
  input: { currentPassword: string; newPassword: string }
) {
  const user = await userRepo.findById(userId);
  if (!user) throw new Error('USER_NOT_FOUND');

  const ok = await bcrypt.compare(input.currentPassword, user.password);
  if (!ok) throw new Error('INVALID_CURRENT_PASSWORD');

  const hash = await bcrypt.hash(input.newPassword, 12);
  await userRepo.updatePassword(userId, hash);
}

export async function updateProfile(userId: number, input: { email: string; name?: string }) {
  const user = await userRepo.findById(userId);
  if (!user) throw new Error('USER_NOT_FOUND');

  // Si l'email change, vérifier qu'il n'est pas déjà pris
  if (input.email !== user.email) {
    const existing = await userRepo.findByEmail(input.email);
    if (existing && existing.id !== userId) {
      throw new Error('EMAIL_TAKEN');
    }
  }

  await userRepo.updateProfile(userId, {
    email: input.email,
    name: input.name && input.name.trim() ? input.name.trim() : null,
  });
}

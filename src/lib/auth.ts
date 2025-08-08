// lib/auth.ts

import { cookies } from 'next/headers';

export async function getTokenFromCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) throw new Error('Token non trouvé');
  return token;
}
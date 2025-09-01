// src/app/(auth)/login/actions.ts

'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { authCookieName, authCookieOptions } from '@/lib/auth-cookies';
import { login } from '@/server/services/auth.service';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function loginAction(formData: FormData) {
  const data = schema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  const { token } = await login(data);

  const cookieStore = await cookies();
  cookieStore.set(authCookieName, token, authCookieOptions);
}

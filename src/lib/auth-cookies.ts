// src/lib/auth.ts

export const authCookieName = 'token';

export const authCookieOptions = {
  httpOnly: true,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 jours
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
};

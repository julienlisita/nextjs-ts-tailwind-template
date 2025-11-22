// src/lib/auth.ts

export const authCookieName = 'token';

export const authCookieOptions = {
  httpOnly: true,
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 jours
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  domain:
    process.env.NODE_ENV === 'production'
      ? 'nextjs-ts-tailwind-template-dusky.vercel.app'
      : 'localhost',
};

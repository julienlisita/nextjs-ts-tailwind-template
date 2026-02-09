// src/server/guards/requireAuth.pages.ts
import { verifyToken } from '@/lib/jwt';
import type { GetServerSidePropsContext } from 'next';

export function requireAuthPages(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies?.token;
  if (!token) return null;

  return verifyToken(token);
}

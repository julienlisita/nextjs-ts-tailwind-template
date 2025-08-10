// src/server/middlewares/withAuth.ts

import type { NextRequest } from 'next/server';
import { protectRoute } from './protectRoute';
import { restrictTo } from './restrictTo';
import type { AuthedRequest } from '@/types/next';

export async function ensureAdmin(req: NextRequest) {
  const error = await protectRoute(req);
  if (error) return error;
  return restrictTo('admin')(req as AuthedRequest);
}
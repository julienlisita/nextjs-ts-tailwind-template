import { checkAuthHandler } from '@/server/controllers/auth.controller';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  return checkAuthHandler(req);
}
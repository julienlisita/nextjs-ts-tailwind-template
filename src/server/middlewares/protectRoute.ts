// src/server/middlewares/protectRoute.ts

import { NextRequest, NextResponse } from 'next/server';
import { getTokenFromCookies } from '@/lib/auth';
import { verifyToken} from '@/lib/jwt';
import type { AuthedRequest } from '@/types/next';

export async function protectRoute(req: NextRequest): Promise<NextResponse | null> {
  try {
    const token = await getTokenFromCookies();
    if (!token) {
      return NextResponse.json({ message: 'Accès non autorisé' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    (req as AuthedRequest).user = decoded;
    return null;
  } catch {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 401 });
  }
}
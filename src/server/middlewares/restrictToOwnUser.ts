// src/server/middleware/restrictToOwnUser.ts

import { getTokenFromCookies } from '@/lib/auth';
import { verifyToken } from '@/lib/jwt';
import { NextResponse } from 'next/server';

export async function restrictToOwnUser(req: Request, userIdParam: string) {
  try {
    const token = await getTokenFromCookies();
    const decoded = verifyToken(token);

    if (decoded.userId !== userIdParam) {
      return NextResponse.json(
        { message: 'Accès refusé : vous ne pouvez modifier que vos propres données' },
        { status: 403 }
      );
    }

    // OK, l'utilisateur modifie ses propres données
    return null;
  } catch (error) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { getTokenFromCookies } from '@/lib/auth';
import { verifyToken } from '@/lib/jwt';

export async function protectRoute(req: NextRequest) {
  try {
    const token = await getTokenFromCookies();

    const decoded = verifyToken(token); // { userId, role }

    // Ajout des infos utilisateur à l’objet Request (adapté selon ton usage)
    (req as any).user = decoded;

    return { user: decoded };
  } catch (error) {
    return NextResponse.json({ message: 'Accès non autorisé' }, { status: 401 });
  }
}
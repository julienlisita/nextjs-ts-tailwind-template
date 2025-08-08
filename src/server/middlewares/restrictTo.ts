// src/server/middleware/restrictTo.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getTokenFromCookies } from '@/lib/auth';
import { verifyToken } from '@/lib/jwt';

export function restrictTo(allowedRole: string) {
  return async function middleware(req: NextRequest) {
    try {
      const token = await getTokenFromCookies();
      const decoded = verifyToken(token);

      if (decoded.role !== allowedRole) {
        return NextResponse.json(
          { message: 'Accès refusé : rôle insuffisant' },
          { status: 403 }
        );
      }

      return null;
    } catch (error) {
      return NextResponse.json(
        { message: 'Non autorisé ou token invalide' },
        { status: 401 }
      );
    }
  };
}
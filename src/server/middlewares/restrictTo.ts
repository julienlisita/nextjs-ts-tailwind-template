// src/server/middlewares/restrictTo.ts

import { NextResponse } from 'next/server';
import type { AuthedRequest } from '@/types/next';

export function restrictTo(...allowedRoles: string[]) {
  return async function (req: AuthedRequest) {
    if (!req.user) {
      return NextResponse.json({ message: 'Utilisateur non authentifié' }, { status: 401 });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return NextResponse.json({ message: 'Accès refusé : rôle insuffisant' }, { status: 403 });
    }

    return null;
  };
}

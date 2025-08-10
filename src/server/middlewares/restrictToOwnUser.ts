// src/server/middlewares/restrictToOwnUser.ts
import { NextResponse } from 'next/server';
import type { AuthedRequest } from '@/types/next';

export function restrictToOwnUser(getUserIdParam: (req: AuthedRequest) => string | null) {
  return async function (req: AuthedRequest) {
    if (!req.user) {
      return NextResponse.json(
        { message: 'Utilisateur non authentifié' },
        { status: 401 }
      );
    }

    const param = getUserIdParam(req);
    if (!param) {
      return NextResponse.json(
        { message: 'Paramètre utilisateur manquant' },
        { status: 400 }
      );
    }

    const paramAsNumber = Number(param);
    if (Number.isNaN(paramAsNumber)) {
      return NextResponse.json(
        { message: 'ID invalide' },
        { status: 400 }
      );
    }

    if (req.user.userId !== paramAsNumber) {
      return NextResponse.json(
        { message: 'Accès refusé : vous ne pouvez modifier que vos propres données' },
        { status: 403 }
      );
    }

    return null;
  };
}
// src/app/api/users/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ message: 'Liste des utilisateurs', users });
}


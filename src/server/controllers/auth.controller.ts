import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getTokenFromCookies } from '@/lib/auth';
import { verifyToken } from '@/lib/jwt';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/jwt';

export async function loginHandler(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  console.log(user?.password);
  console.log(user?.email);

  if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ message: 'Identifiants invalides' }, { status: 401 });
  }

  const token = signToken({ userId: user.id, role: user.role });

  const response = NextResponse.json({ message: 'Connexion réussie' });
  response.cookies.set('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}

export async function checkAuthHandler() {
  try {
    const token = await getTokenFromCookies();
    const decoded = verifyToken(token);

    return NextResponse.json({
      message: 'Connecté',
      user: decoded,
    });
  } catch {
    return NextResponse.json({ message: 'Non authentifié' }, { status: 401 });
  }
}

export async function logoutHandler() {
  const response = NextResponse.json({ message: 'Déconnecté' });
  response.cookies.set('token', '', { maxAge: 0 });
  return response;
}

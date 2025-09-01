// src/lib/jwt.ts

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET in env');
}

type Payload = { userId: string; role: 'ADMIN' | 'USER' };

export function signToken(payload: Payload) {
  // Ajuste l'expiration si besoin
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as Payload & { iat: number; exp: number };
}

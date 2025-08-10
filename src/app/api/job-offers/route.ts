// src/app/api/job-offers/route.ts

import { getAllJobOffersHandler, createJobOfferHandler } from '@/server/controllers/jobOffer.controller';
import { protectRoute } from '@/server/middlewares/protectRoute';
import { restrictTo } from '@/server/middlewares/restrictTo';
import { NextRequest, NextResponse } from 'next/server';
import type { AuthedRequest } from '@/types/next';

export async function GET(req: NextRequest) {
  return getAllJobOffersHandler();
}

export async function POST(req: NextRequest) {
  const auth = await protectRoute(req);
  if (auth instanceof NextResponse) return auth;   

  const roleCheck = await restrictTo('admin')(req as AuthedRequest);
  if (roleCheck) return roleCheck;
  return createJobOfferHandler(req);
}
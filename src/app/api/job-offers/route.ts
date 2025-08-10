// src/app/api/job-offers/route.ts

import { getAllJobOffersHandler, createJobOfferHandler } from '@/server/controllers/jobOffer.controller';
import { NextRequest } from 'next/server';
import { ensureAdmin } from '@/server/middlewares/withAuth';

export async function GET(req: NextRequest) {
  return getAllJobOffersHandler();
}

export async function POST(req: NextRequest) {
const guard = await ensureAdmin(req);
  if (guard) return guard;
  return createJobOfferHandler(req);
}
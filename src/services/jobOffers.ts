// src/services/jobOffers.ts

import 'server-only';
import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from '@/lib/prisma';
import type { JobOffer } from '@/types/job';

export async function getPublicJobOffers(): Promise<JobOffer[]> {
  noStore();
  const rows = await prisma.jobOffer.findMany({
    orderBy: { publishedAt: 'desc' },
  });
  return rows as unknown as JobOffer[];
}

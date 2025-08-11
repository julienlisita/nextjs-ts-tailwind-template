// src/services/jobOffers.ts

import 'server-only';
import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from '@/lib/prisma';

export type JobOffer = {
  id: number;
  title: string;
  location: string;
  description: string;
  publishedAt: string;
};

export async function getPublicJobOffers(): Promise<JobOffer[]> {
  noStore();
  const rows = await prisma.jobOffer.findMany({
    orderBy: { publishedAt: 'desc' },
  });
  return rows as unknown as JobOffer[];
}

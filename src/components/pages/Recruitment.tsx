// src/components/pages/Recruitment.tsx

import { getPublicJobOffersServer } from '@/services/jobOffers.server';
import RecruitmentClient from '@/components/pages/RecruitmentClient';
import { PAGE_DYNAMIC, PAGE_RUNTIME, PAGE_REVALIDATE } from '@/config/dataMode';

export const runtime = PAGE_RUNTIME;
export const dynamic = PAGE_DYNAMIC;
export const revalidate = PAGE_REVALIDATE;

export default async function Recruitment() {
  const jobOffers = await getPublicJobOffersServer();
  return <RecruitmentClient offers={jobOffers} />;
}

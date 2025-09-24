// src/components/pages/Recruitment.tsx

import RecruitmentClient from '@/components/pages/RecruitmentClient';
import JobOffersSectionServer from '../section/JobOffersSectionServer';
import { Suspense } from 'react';

export default async function Recruitment() {
  return (
    <>
      <JobOffersSectionServer />
      <Suspense fallback={<div>Chargement…</div>}>
        <RecruitmentClient />;
      </Suspense>
    </>
  );
}

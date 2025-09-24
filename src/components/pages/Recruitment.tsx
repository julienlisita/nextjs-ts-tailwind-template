// src/components/pages/Recruitment.tsx

import RecruitmentClient from '@/components/pages/RecruitmentClient';
import JobOffersSectionServer from '../section/JobOffersSectionServer';

export default async function Recruitment() {
  return (
    <>
      <JobOffersSectionServer />
      <RecruitmentClient />;
    </>
  );
}

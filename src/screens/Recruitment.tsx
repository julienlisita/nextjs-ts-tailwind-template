// src/screens/Recruitment.tsx

import type { GetServerSideProps } from 'next';
import type { JobOffer } from '@/types/job';

import PageHero from '@/components/patterns/PageHero';
import JobOffersSection from '@/components/recruitment/JobOffersSection';
import RecruitmentClient from './RecruitmentClient';
import Cta from '@/components/patterns/Cta';
import { FileText } from 'lucide-react';

import { getPublicJobOffersServer } from '@/server/services/jobOffers.server';

type RecruitmentPageProps = {
  offers: JobOffer[];
};

export const getServerSideProps: GetServerSideProps<RecruitmentPageProps> = async () => {
  try {
    const offers = await getPublicJobOffersServer();

    return {
      props: {
        offers: JSON.parse(JSON.stringify(offers)), // Prisma-safe
      },
    };
  } catch {
    return {
      props: {
        offers: [],
      },
    };
  }
};

export default function Recruitment({ offers }: RecruitmentPageProps) {
  return (
    <>
      <PageHero
        icon={<FileText size={40} />}
        title="Recrutement"
        subtitle="Découvrez nos opportunités et rejoignez une équipe engagée à vos côtés."
        align="center"
      />

      <JobOffersSection items={offers} />

      <RecruitmentClient />

      <Cta
        title="Une question ou une candidature spontanée ?"
        description="Contactez-nous pour en savoir plus ou nous transmettre votre candidature."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </>
  );
}

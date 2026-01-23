// src/components/pages/Recruitment.tsx

import RecruitmentClient from '@/components/pages/RecruitmentClient';
import { Suspense } from 'react';
import PageHero from '../patterns/PageHero';
import JobOffersSectionServer from '../recruitment/JobOffersSectionServer';
import Cta from '../patterns/Cta';
import { FileText } from 'lucide-react';

export default async function Recruitment() {
  return (
    <>
      <PageHero
        icon={<FileText size={40} />}
        title="Recrutement"
        subtitle="Découvrez nos opportunités et rejoignez une équipe engagée à vos côtés."
        align="center"
      />

      <JobOffersSectionServer />

      <Suspense fallback={<div>Chargement…</div>}>
        <RecruitmentClient />;
      </Suspense>

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

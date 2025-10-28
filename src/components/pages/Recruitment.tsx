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
        subtitle="Découvrez nos opportunités et rejoignez notre équipe."
        align="center"
      />
      <JobOffersSectionServer />
      <Suspense fallback={<div>Chargement…</div>}>
        <RecruitmentClient />;
      </Suspense>
      <Cta
        title="Rejoignez notre équipe"
        description="Vous partagez nos valeurs ? Découvrez nos opportunités et contactez-nous pour postuler."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </>
  );
}

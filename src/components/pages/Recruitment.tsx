// src/components/pages/Recruitment.tsx

import RecruitmentClient from '@/components/pages/RecruitmentClient';
import JobOffersSectionServer from '../section/JobOffersSectionServer';
import { Suspense } from 'react';
import HeroIntro from '../section/HeroIntro';
import { FileText } from 'lucide-react';
import Cta from '../ui/Cta';

export default async function Recruitment() {
  return (
    <>
      <HeroIntro
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

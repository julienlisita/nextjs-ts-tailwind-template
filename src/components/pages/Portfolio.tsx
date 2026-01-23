// src/components/pages/Portfolio.tsx

import Cta from '../patterns/Cta';
import PageHero from '../patterns/PageHero';
import { Briefcase } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageHero
        icon={<Briefcase size={40} />}
        title="Portfolio"
        subtitle="Découvrez une sélection de projets et de réalisations menés pour nos clients."
        align="center"
      />

      {/* Sections portfolio / projets */}
      <Cta
        title="Titre du CTA"
        description="Description du CTA"
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

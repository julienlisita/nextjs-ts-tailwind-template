// src/components/pages/Services.tsx

'use client';

import Cta from '../ui/Cta';
import ServicesSection from '../section/ServicesSection';
import { Briefcase } from 'lucide-react';
import HeroIntro from '../section/HeroIntro';

export default function ServicesFeatures() {
  return (
    <div>
      <HeroIntro
        icon={<Briefcase size={40} />}
        title="Nos services"
        subtitle="Un aperçu clair et détaillé de ce que nous proposons."
        align="center"
      />
      <ServicesSection />
      <Cta
        title="Bénéficiez de nos services"
        description="Nos experts sont prêts à vous accompagner. Discutons ensemble de votre projet."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

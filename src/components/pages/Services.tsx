// src/components/pages/Services.tsx

import { Briefcase } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import ServicesSection from '../services/ServicesSection';
import Cta from '../patterns/Cta';

export default function ServicesFeatures() {
  return (
    <div>
      <PageHero
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

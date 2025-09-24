// src/components/pages/Services.tsx

'use client';

import PageTitle from '../ui/PageTitle';
import Cta from '../ui/Cta';
import ServicesSection from '../section/ServicesSection';

export default function ServicesFeatures() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Nos services</PageTitle>
      <ServicesSection />
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

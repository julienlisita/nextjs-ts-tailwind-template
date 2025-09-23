// src/components/sections/ServicesFeaturesIntro.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import { services } from '@/data/services';

type Props = {
  limit?: number;
};

export default function ServicesFeatures({ limit }: Props) {
  const list = typeof limit === 'number' ? services.slice(0, Math.max(0, limit)) : services;

  return (
    <FeaturesGrid
      eyebrow="Nos Services"
      title="Ce que nous proposons"
      subtitle="Un accompagnement complet et bienveillant au quotidien."
      items={list}
      ctaLabel="En savoir plus"
      ctaHref="/services"
      secondaryCtaLabel="Nous contacter"
      secondaryCtaHref="/contact"
      align="left"
    />
  );
}

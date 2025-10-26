// src/components/sections/ServicesFeaturesIntro.tsx

'use client';

import FeatureCard from '../widgets/FeatureCard';
import FeaturesGrid from './FeaturesGrid';
import { services } from '@/data/services';

type Props = {
  className?: string;
};

export default function ServicesFeatures({ className }: Props) {
  return (
    <FeaturesGrid
      eyebrow="Nos Services"
      title="Ce que nous proposons"
      subtitle="Un accompagnement complet et bienveillant au quotidien."
      items={services.slice(0, 3)}
      ctaLabel="En savoir plus"
      ctaHref="/services"
      secondaryCtaLabel="Nous contacter"
      secondaryCtaHref="/contact"
      align="left"
      className={className}
      renderItem={(item) => (
        <FeatureCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          variant="gradient"
          tone="brand"
          align="center"
        />
      )}
    />
  );
}

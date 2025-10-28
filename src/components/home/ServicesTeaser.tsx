// src/components/home/ServicesTeaser.tsx

'use client';

import { services } from '@/data/services';
import FeatureCard from '../data-display/FeatureCard';
import FeaturesGrid from '../patterns/FeaturesGrid';

type Props = {
  className?: string;
};

export default function ServicesTeaser({ className }: Props) {
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

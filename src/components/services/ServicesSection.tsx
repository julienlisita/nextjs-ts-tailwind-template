// src/components/services/ServicesSection.tsx

'use client';

import { services } from '@/data/services';
import FeaturesGrid from '../patterns/FeaturesGrid';
import FeatureCard from '../data-display/FeatureCard';

type Props = {
  className?: string;
};

export default function ServicesSection({ className }: Props) {
  return (
    <FeaturesGrid
      eyebrow={'Nos Services'}
      title={'Ce que nous proposons'}
      subtitle={'Un accompagnement complet et bienveillant au quotidien.'}
      items={services}
      align={'left'}
      gridClassName={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'}
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

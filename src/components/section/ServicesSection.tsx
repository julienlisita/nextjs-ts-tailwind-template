// src/components/Section/ServicesSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import { services } from '@/data/services';

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
    />
  );
}

// src/components/sections/ValuesSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import FeatureCard from '@/components/widgets/FeatureCard';
import { values } from '@/data/values';

type ValuesSectionProps = {
  className?: string;
  align?: 'left' | 'center' | 'right';
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cardGradient?: [string, string] | false;
};

export default function ValuesSection({
  className,
  align = 'left',
  eyebrow = 'Nos valeurs',
  title = 'Ce qui nous guide',
  subtitle = 'Des principes simples qui structurent notre accompagnement.',
  cardGradient,
}: ValuesSectionProps) {
  return (
    <FeaturesGrid
      className={className}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      align={align}
      items={values}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
      renderItem={(item) => (
        <FeatureCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          variant="with-header"
          gradient={['#e5e7eb', '#9ca3af']}
          align="left"
        />
      )}
      getKey={(it, i) => `${it.title}-${i}`}
    />
  );
}

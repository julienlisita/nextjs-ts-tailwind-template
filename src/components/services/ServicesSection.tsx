// src/components/services/ServicesSection.tsx

'use client';

import { services } from '@/data/services';
import FeaturesGrid from '../patterns/FeaturesGrid';
import FeatureCard from '../data-display/FeatureCard';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

type Props = {
  className?: string;
};

export default function ServicesSection({ className }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Nos Services"
          title="Ce que nous proposons"
          subtitle="Un accompagnement complet et bienveillant au quotidien."
          align="center"
        />

        <FeaturesGrid
          items={services}
          pageSize={6}
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
      </SectionWrapper>
    </Section>
  );
}

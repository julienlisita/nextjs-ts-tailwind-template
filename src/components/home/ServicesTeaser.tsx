// src/components/home/ServicesTeaser.tsx

'use client';

import { services } from '@/data/services';
import FeatureCard from '../data-display/FeatureCard';
import FeaturesGrid from '../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import ActionsStack from '../patterns/ActionsStack';

type Props = {
  className?: string;
};

export default function ServicesTeaser({ className }: Props) {
  return (
    <Section bgColor="#A8D5BA15">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Nos Services"
          title="Ce que nous proposons"
          subtitle="Un accompagnement complet et bienveillant au quotidien."
          align="center"
        />

        <FeaturesGrid
          items={services.slice(0, 3)}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
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
        <ActionsStack
          align="center"
          className="mt-8"
          items={[
            { label: 'Tous les services', href: '/services', variant: 'primary' },
            { label: 'Nous contacter', href: '/contact', variant: 'secondary' },
          ]}
        />
      </SectionWrapper>
    </Section>
  );
}

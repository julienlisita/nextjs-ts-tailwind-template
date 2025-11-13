// src/components/services/ServicesSection.tsx

import { services } from '@/data/services';
import FeaturesGrid from '../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function ServicesSection() {
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
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          cardVariant="gradient"
          cardTone="brand"
          cardAlign="center"
        />
      </SectionWrapper>
    </Section>
  );
}

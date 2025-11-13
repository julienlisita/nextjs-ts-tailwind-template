// src/components/home/ServicesTeaser.tsx

import { services } from '@/data/services';
import FeaturesGrid from '../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import ActionsStack from '../patterns/ActionsStack';

export default function ServicesTeaser() {
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
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          cardVariant="gradient"
          cardTone="brand"
          cardAlign="center"
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

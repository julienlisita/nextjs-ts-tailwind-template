// src/components/about/ValuesSection.tsx

import React from 'react';
import { values } from '@/data/values';
import FeaturesGrid from '../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function ValuesSection() {
  const titleId = React.useId();
  const subtitleId = React.useId();
  return (
    <Section bgColor="#A8D5BA15" labelledBy={titleId} describedBy={subtitleId}>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Nos valeurs"
          title="Ce qui nous guide"
          subtitle="Des principes simples qui structurent notre accompagnement."
          align="center"
        />

        <FeaturesGrid
          items={values}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          cardVariant="with-header"
          cardTone="success"
          cardAlign="center"
        />
      </SectionWrapper>
    </Section>
  );
}

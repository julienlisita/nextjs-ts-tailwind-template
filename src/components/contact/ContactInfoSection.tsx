// src/components/contact/ContactInfoSection.tsx

'use client';

import { contactInfos } from '@/data/contact';
import FeaturesGrid from '../patterns/FeaturesGrid';
import FeatureCard from '../data-display/FeatureCard';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

type Props = {
  className?: string;
};

export default function ContactInfoSection({ className }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Contact"
          title="Nos coordonnées"
          subtitle="Joignez-nous par téléphone, email, ou venez nous voir."
          align="center"
        />

        <FeaturesGrid
          items={contactInfos}
          className={className}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant="outlined"
              tone="neutral"
              align="center"
            />
          )}
        />
      </SectionWrapper>
    </Section>
  );
}

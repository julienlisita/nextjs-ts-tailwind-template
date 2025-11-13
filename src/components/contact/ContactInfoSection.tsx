// src/components/contact/ContactInfoSection.tsx

import { contactInfos } from '@/data/contact';
import FeaturesGrid from '../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function ContactInfoSection() {
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
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          cardVariant="outlined"
          cardTone="neutral"
          cardAlign="center"
        />
      </SectionWrapper>
    </Section>
  );
}

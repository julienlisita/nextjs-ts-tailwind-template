// src/components/home/TestimonialsTeaser.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import FeaturesGrid from '../patterns/FeaturesGrid';
import { TestimonialCard } from '../data-display/TestimonialCard';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import ActionsStack from '../patterns/ActionsStack';

type Props = {
  items: ReadonlyArray<Testimonial>;
};

export default function TestimonialsTeaser({ items }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Ils nous font confiance"
          title="Les avis de nos clients"
          subtitle="Avis vérifiés, triés et présentés pour vous aider à décider."
          align="center"
        />

        <FeaturesGrid
          items={items}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          renderItem={(t) => <TestimonialCard {...t} />}
          getKey={(t) => t.id}
        />
        <ActionsStack
          align="center"
          className="mt-8"
          items={[
            { label: 'Voir tous les témoignages', href: '/testimonials', variant: 'primary' },
          ]}
        />
      </SectionWrapper>
    </Section>
  );
}

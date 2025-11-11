// src/components/testimonials/TestimonialsSection.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '../data-display/TestimonialCard';
import FeaturesGrid from '../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import ActionsStack from '../patterns/ActionsStack';

export default function TestimonialsSection({ items }: { items: ReadonlyArray<Testimonial> }) {
  return (
    <Section bgColor="#A8D5BA15">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Ils nous font confiance"
          title="Tous les témoignages"
          subtitle="Consultez les retours authentiques de nos clients."
          align="center"
        />

        <FeaturesGrid
          items={items}
          tabs={[
            { label: 'Tous', value: 'all' },
            { label: 'Mise en avant', value: 'featured' },
          ]}
          defaultTab="all"
          filterByTab={(t, tab) => (tab === 'featured' ? Boolean(t.highlight) : true)}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          pageSize={4}
          renderItem={(t) => (
            <TestimonialCard
              name={t.name}
              role={t.role}
              company={t.company}
              quote={t.quote}
              rating={t.rating}
              avatarUrl={t.avatarUrl}
              displayDate={t.displayDate}
              city={t.city}
              highlight={t.highlight}
              variant="default"
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

// src/components/sections/TestimonialsSection.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '@/components/widgets/TestimonialCard';
import FeaturesGrid from './FeaturesGrid';

export default function TestimonialsSection({ items }: { items: ReadonlyArray<Testimonial> }) {
  return (
    <FeaturesGrid<Testimonial>
      eyebrow="Ils nous font confiance"
      title="Tous les témoignages"
      subtitle="Consultez les retours authentiques de nos clients."
      titleAlign="center"
      items={items}
      tabs={[
        { label: 'Tous', value: 'all' },
        { label: 'Mise en avant', value: 'featured' },
      ]}
      defaultTab="all"
      filterByTab={(t, tab) => (tab === 'featured' ? Boolean(t.highlight) : true)}
      pageSize={9}
      renderItem={(t) => (
        <TestimonialCard
          name={t.name}
          role={t.role}
          company={t.company}
          quote={t.quote}
          rating={t.rating}
          displayDate={t.displayDate}
        />
      )}
      getKey={(t) => t.id}
    />
  );
}

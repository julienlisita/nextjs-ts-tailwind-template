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
      align="left"
      items={items}
      tabs={[
        { label: 'Tous', value: 'all' },
        { label: 'Mise en avant', value: 'featured' },
      ]}
      defaultTab="all"
      filterByTab={(t, tab) => (tab === 'featured' ? Boolean(t.highlight) : true)}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
      pageSize={8}
      renderItem={(t) => <TestimonialCard {...t} />}
      getKey={(t) => t.id}
    />
  );
}

// src/components/sections/TestimonialsSectionHome.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '@/components/widgets/TestimonialCard';
import FeaturesGrid from './FeaturesGrid';

type Props = {
  items: ReadonlyArray<Testimonial>;
};

export default function TestimonialsSectionHome({ items }: Props) {
  return (
    <FeaturesGrid<Testimonial>
      eyebrow="Ils nous font confiance"
      title="Les avis de nos clients"
      subtitle="Avis vérifiés, triés et présentés pour vous aider à décider."
      align="left"
      items={items}
      ctaLabel="Voir tous les témoignages"
      ctaHref="/testimonials"
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
      renderItem={(t) => <TestimonialCard {...t} />}
      getKey={(t) => t.id}
    />
  );
}

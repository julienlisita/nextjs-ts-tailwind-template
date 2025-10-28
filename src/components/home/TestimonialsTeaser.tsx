// src/components/home/TestimonialsTeaser.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import FeaturesGrid from '../patterns/FeaturesGrid';
import { TestimonialCard } from '../data-display/TestimonialCard';

type Props = {
  items: ReadonlyArray<Testimonial>;
};

export default function TestimonialsTeaser({ items }: Props) {
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

// src/components/sections/TestimonialsSection.tsx

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import { TestimonialCard } from '@/components/widgets/TestimonialCard';
import type { Testimonial } from '@/types/testimonial';

type Props = {
  title?: string;
  items: ReadonlyArray<Testimonial>;
  limit?: number; // ex: n’afficher que 3 cartes sur la home
  showGrid?: boolean; // toggle grid si tu veux un layout différent
  className?: string;
};

export default function TestimonialsSection({
  title = 'Les avis de nos clients',
  items,
  limit,
  showGrid = true,
  className,
}: Props) {
  const list = typeof limit === 'number' ? items.slice(0, Math.max(0, limit)) : items;

  if (!list.length) return null;

  return (
    <Section className={className}>
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>

        {showGrid ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 justify-center">
            {list.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                role={t.role}
                company={t.company}
                quote={t.quote}
                rating={t.rating}
                displayDate={t.displayDate}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {list.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                role={t.role}
                company={t.company}
                quote={t.quote}
                rating={t.rating}
                displayDate={t.displayDate}
              />
            ))}
          </div>
        )}
      </SectionWrapper>
    </Section>
  );
}

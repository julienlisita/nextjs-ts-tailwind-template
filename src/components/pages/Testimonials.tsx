// src/components/pages/Testimonials.tsx

import PageTitle from '@/components/ui/PageTitle';
import Section from '../common/Section';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { TestimonialCard } from '../widgets/TestimonialCard';
import { PAGE_DYNAMIC, PAGE_RUNTIME, PAGE_REVALIDATE } from '@/config/dataMode';
import { getPublicTestimonialsServer } from '@/services/testimonials.server';

export const runtime = PAGE_RUNTIME;
export const dynamic = PAGE_DYNAMIC;
export const revalidate = PAGE_REVALIDATE;

export default async function Testimonials() {
  const testimonials = await getPublicTestimonialsServer();
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Témoignages</PageTitle>
      <Section>
        <SectionWrapper>
          <SectionTitle>Les avis de nos clients</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 justify-center">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
                date={testimonial.date}
              />
            ))}
          </div>
        </SectionWrapper>
      </Section>
    </div>
  );
}

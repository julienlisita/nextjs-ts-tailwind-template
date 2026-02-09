// src/pages/Testimonials.tsx

import type { GetServerSideProps } from 'next';
import type { Testimonial } from '@/types/testimonial';

import PageHero from '@/components/patterns/PageHero';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import Cta from '@/components/patterns/Cta';
import { MessageSquare } from 'lucide-react';

import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';

type TestimonialsPageProps = {
  testimonials: ReadonlyArray<Testimonial>;
};

export const getServerSideProps: GetServerSideProps<TestimonialsPageProps> = async () => {
  try {
    const testimonials = await getPublicTestimonialsServer();

    return {
      props: {
        testimonials,
      },
    };
  } catch {
    return {
      props: {
        testimonials: [],
      },
    };
  }
};

export default function TestimonialsPageView({ testimonials }: TestimonialsPageProps) {
  return (
    <div>
      <PageHero
        icon={<MessageSquare size={40} />}
        title="Témoignages"
        subtitle="Découvrez les retours de personnes que nous avons accompagnées."
        align="center"
      />

      <TestimonialsSection items={testimonials} />

      <Cta
        title="Une question avant de vous lancer ?"
        description="Contactez-nous : nous vous répondrons rapidement et avec clarté."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

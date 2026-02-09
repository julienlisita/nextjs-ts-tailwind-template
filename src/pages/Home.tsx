// src/pages/Home.tsx

import type { GetServerSideProps } from 'next';
import type { Testimonial } from '@/types/testimonial';

import AboutTeaser from '@/components/home/AboutTeaser';
import Hero from '@/components/home/Hero';
import NewsTeaserServer from '@/components/home/NewsTeaserServer';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import TestimonialsTeaser from '@/components/home/TestimonialsTeaser';
import Cta from '@/components/patterns/Cta';

import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';

type HomePageProps = {
  testimonials: ReadonlyArray<Testimonial>;
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const all = await getPublicTestimonialsServer();

    const LIMIT = 2;
    const onlyFeatured = false;

    let filtered = onlyFeatured ? all.filter((t) => t.highlight) : all;
    if (filtered.length === 0) filtered = all;

    const items = filtered.slice(0, LIMIT);

    return {
      props: {
        testimonials: items,
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

export default function Home({ testimonials }: HomePageProps) {
  return (
    <div>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />

      <TestimonialsTeaser items={testimonials} />

      <NewsTeaserServer />

      <Cta
        title="Prêt à en savoir plus ?"
        description="Contactez-nous dès aujourd’hui pour découvrir comment nous pouvons vous accompagner."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

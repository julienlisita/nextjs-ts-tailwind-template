// src/screens/Home.tsx

import type { GetServerSideProps } from 'next';
import type { Testimonial } from '@/types/testimonial';
import type { NewsItem } from '@/types/news';

import AboutTeaser from '@/components/home/AboutTeaser';
import Hero from '@/components/home/Hero';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import NewsTeaser from '@/components/home/NewsTeaser';
import Cta from '@/components/patterns/Cta';

import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';
import { getPublicNewsServer } from '@/server/services/news.server';
import TestimonialsTeaserServer from '@/components/home/TestimonialsTeaserServer';

type HomePageProps = {
  testimonials: ReadonlyArray<Testimonial>;
  news: ReadonlyArray<NewsItem>;
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  // Testimonials
  let testimonials: ReadonlyArray<Testimonial> = [];
  try {
    const all = await getPublicTestimonialsServer();
    const LIMIT = 2;
    const onlyFeatured = false;

    let filtered = onlyFeatured ? all.filter((t) => t.highlight) : all;
    if (filtered.length === 0) filtered = all;

    testimonials = filtered.slice(0, LIMIT);
  } catch {
    testimonials = [];
  }

  // News
  let news: ReadonlyArray<NewsItem> = [];
  try {
    const allNews = await getPublicNewsServer();
    const LIMIT = 3; // au choix
    news = allNews.slice(0, LIMIT);
  } catch {
    news = [];
  }

  return {
    props: {
      testimonials,
      news,
    },
  };
};

export default function Home({ testimonials, news }: HomePageProps) {
  return (
    <div>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />

      <TestimonialsTeaserServer />

      {/* Teaser normal (pas Server) */}
      <NewsTeaser items={news} />

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

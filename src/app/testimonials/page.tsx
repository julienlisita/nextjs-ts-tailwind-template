// src/app/testimonials/page.tsx

import Testimonials from '@/components/pages/Testimonials';

export const metadata = {
  title: 'Témoignages – Avis de nos clients',
  description:
    'Lisez les témoignages et retours d’expérience de nos clients satisfaits, preuve de notre engagement et de notre qualité de service.',
  alternates: {
    canonical: 'https://www.exemple.com/testimonials',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}

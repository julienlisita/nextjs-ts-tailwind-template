// src/components/pages/Testimonials.tsx

import PageTitle from '@/components/ui/PageTitle';
import TestimonialsSectionServer from '../section/TestimonialsSectionServer';
import Cta from '../ui/Cta';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Témoignages</PageTitle>
      <TestimonialsSectionServer />
      <Cta />
    </div>
  );
}

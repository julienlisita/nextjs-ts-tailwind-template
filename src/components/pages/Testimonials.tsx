// src/components/pages/Testimonials.tsx

import PageTitle from '@/components/ui/PageTitle';
import TestimonialsSectionServer from '../section/TestimonialsSectionServer';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Témoignages</PageTitle>
      <TestimonialsSectionServer />
    </div>
  );
}

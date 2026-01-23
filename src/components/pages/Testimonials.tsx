// src/components/pages/Testimonials.tsx

import { MessageSquare } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import TestimonialsSectionServer from '../testimonials/TestimonialsSectionServer';
import Cta from '../patterns/Cta';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div>
      <PageHero
        icon={<MessageSquare size={40} />}
        title="Témoignages"
        subtitle="Découvrez les retours de personnes que nous avons accompagnées."
        align="center"
      />

      <TestimonialsSectionServer />

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

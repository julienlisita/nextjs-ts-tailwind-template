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
        subtitle="Ils partagent leur expérience et leur avis sur nos services."
        align="center"
      />
      <TestimonialsSectionServer />
      <Cta
        title="Faites partie de nos clients satisfaits"
        description="Rejoignez ceux qui nous font déjà confiance. Contactez-nous pour commencer l’aventure."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

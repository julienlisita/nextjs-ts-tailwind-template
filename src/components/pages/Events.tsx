// src/components/pages/Events.tsx

import Cta from '../patterns/Cta';
import PageHero from '../patterns/PageHero';
import { Calendar } from 'lucide-react';

export default function Events() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageHero
        icon={<Calendar size={40} />}
        title="Nos événements"
        subtitle="Découvrez les temps forts, rencontres et initiatives organisés tout au long de l’année."
        align="center"
      />

      {/* Sections événements à venir / passés */}

      <Cta
        title="Titre du CTA"
        description="Description du CTA"
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

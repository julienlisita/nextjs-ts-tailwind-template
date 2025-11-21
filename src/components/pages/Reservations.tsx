// src/components/pages/Reservations.tsx

import { Calendar } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import ReservationSectionServer from '../reservations/ReservationSectionServer';
import Cta from '../patterns/Cta';

export default function Reservations() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        icon={<Calendar size={40} />}
        title="Réserver un créneau"
        subtitle="Choisissez un créneau disponible et finalisez votre réservation en quelques secondes."
        align="center"
      />

      {/* Section réservations (server component) */}
      <ReservationSectionServer />

      {/* CTA générique pour template */}
      <Cta
        title="Vous avez une question ?"
        description="Contactez-nous pour toute demande particulière ou information complémentaire."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

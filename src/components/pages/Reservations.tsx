// src/components/pages/Reservations.tsx

import { AlertTriangle, Calendar } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import ReservationSectionServer from '../reservations/ReservationSectionServer';
import Cta from '../patterns/Cta';

type ReservationsProps = {
  errorMessage?: string | null;
};

export default function Reservations({ errorMessage }: ReservationsProps) {
  return (
    <div>
      {/* Hero */}
      <PageHero
        icon={<Calendar size={40} />}
        title="Réserver un créneau"
        subtitle="Choisissez un créneau disponible et finalisez votre réservation en quelques secondes."
        align="center"
      />

      {/* Alerte d’erreur */}
      {errorMessage && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex items-start gap-3 rounded-lg border border-orange-300 bg-orange-50 px-4 py-3 text-sm text-orange-900">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Section réservations */}
      <div className={errorMessage ? 'mt-8' : ''}>
        <ReservationSectionServer />
      </div>

      {/* CTA générique */}
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

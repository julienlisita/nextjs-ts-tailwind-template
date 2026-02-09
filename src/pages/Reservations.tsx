import type { GetServerSideProps } from 'next';
import Cta from '@/components/patterns/Cta';
import PageHero from '@/components/patterns/PageHero';
import ReservationFormSection from '@/components/reservations/ReservationFormSection';
import { AlertTriangle, Calendar } from 'lucide-react';
import type { ReservationSlot } from '@prisma/client';

type ReservationsProps = {
  slots: ReservationSlot[];
  errorMessage?: string | null;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { getAvailableSlotsServer } = await import('@/server/services/reservations.server');

    const slots = await getAvailableSlotsServer();

    return {
      props: {
        slots: JSON.parse(JSON.stringify(slots)), // Prisma-safe
      },
    };
  } catch (error) {
    return {
      props: {
        slots: [],
        errorMessage: 'Impossible de charger les créneaux pour le moment.',
      },
    };
  }
};

export default function Reservations({ slots, errorMessage }: ReservationsProps) {
  return (
    <div>
      <PageHero
        icon={<Calendar size={40} />}
        title="Réserver un créneau"
        subtitle="Choisissez un créneau disponible et finalisez votre réservation en quelques secondes."
        align="center"
      />

      {errorMessage && (
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="flex items-start gap-3 rounded-lg border border-orange-300 bg-orange-50 px-4 py-3 text-sm text-orange-900">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <div className={errorMessage ? 'mt-8' : ''}>
        <ReservationFormSection slots={slots} />
      </div>

      <Cta
        title="Besoin d’un renseignement ?"
        description="Contactez-nous pour toute question ou demande particulière avant de réserver."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

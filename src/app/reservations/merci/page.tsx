// src/app/reservations/merci/page.tsx

import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Réservation envoyée – Thomas Delaunay Coaching',
};

export default function ThankYouReservationPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-semibold text-black mb-4">
        Merci pour votre demande de réservation !
      </h1>

      <p className="text-black/80 max-w-lg mb-4">
        Votre demande a bien été transmise. <br />
        Je reviendrai vers vous rapidement pour confirmer le créneau choisi et finaliser la prise de
        rendez-vous.
      </p>

      <Button href="/">Retour à l’accueil</Button>
    </main>
  );
}

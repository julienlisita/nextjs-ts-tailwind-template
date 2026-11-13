// src/app/(site)/reservations/merci/page.tsx

import Button from '@/components/ui/Button';
import '../../thank-you.css';

export const metadata = {
  title: 'Réservation confirmée – Merci',
};

export default function ThankYouReservationPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="thank-you__title text-3xl font-semibold mb-4">
        Merci ! Votre réservation est bien enregistrée.
      </h1>

      <p className="thank-you__text max-w-lg mb-4">
        Vous allez recevoir un email de confirmation avec les détails du créneau choisi.
      </p>

      <p className="thank-you__hint max-w-lg mb-6 text-sm">
        Si rien n’arrive, pensez à vérifier le dossier{' '}
        <strong> Courriers indésirables / Spam</strong>.
      </p>

      <Button href="/">Retour à l’accueil</Button>
    </main>
  );
}

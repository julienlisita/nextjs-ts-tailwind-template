// src/app/(site)/reservations/merci/page.tsx

import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Réservation confirmée – Merci',
};

export default function ThankYouReservationPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-semibold text-black mb-4">Votre réservation est confirmée !</h1>

      <p className="text-black/80 max-w-lg mb-4">
        Votre créneau a bien été réservé. <br />
        Un email de confirmation vous a été envoyé avec les détails de votre demande.
      </p>

      <p className="text-black/60 max-w-lg mb-6 text-sm">
        Si vous ne recevez pas l’email dans les prochaines minutes, pensez à vérifier votre dossier
        <strong> Courriers indésirables / Spam</strong>.
      </p>

      <Button href="/">Retour à l’accueil</Button>
    </main>
  );
}

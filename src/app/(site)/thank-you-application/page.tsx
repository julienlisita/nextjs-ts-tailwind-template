// src/app/(site)/thank-you-application/page.tsx

import Button from '@/components/ui/Button';
import '../thank-you.css';

export const metadata = {
  title: 'Candidature envoyée – Nom de la société',
};

export default function ThankYouApplicationPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="thank-you__title text-3xl font-semibold mb-4">
        Merci pour votre candidature !
      </h1>
      <p className="thank-you__text max-w-lg mb-4">
        Votre profil a bien été transmis à notre équipe. <br />
        Si votre candidature correspond à nos besoins actuels, nous vous contacterons rapidement.
      </p>
      <Button href="/">Retour à l'accueil</Button>
    </main>
  );
}

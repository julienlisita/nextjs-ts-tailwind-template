// src/app/(site)/not-found.tsx

import PageTitle from '@/components/ui/PageTitle';
import { Link } from 'lucide-react';
import './not-found.css';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-8">
      <PageTitle>Page non trouvée</PageTitle>
      <p className="not-found__text mb-6 mt-4">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <Link href="/" className="not-found__link hover:underline">
        Retour à l’accueil
      </Link>
    </main>
  );
}

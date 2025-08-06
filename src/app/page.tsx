// src/app/page.tsx

import Home from '@/components/pages/Home';

export const metadata = {
  title: 'Accueil – Nom entreprise',
  description:
    'Bienvenue sur notre site vitrine. Découvrez nos services et notre expertise au service de votre activité.',
  alternates: {
    canonical: 'https://www.exemple.com/',
  },
};

export default function HomePage() {
  return <Home />;
}

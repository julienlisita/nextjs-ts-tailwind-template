// src/app/(site)/page.tsx

import HomeScreen from '@/screens/HomeScreen';

export const metadata = {
  title: 'Accueil – Nom entreprise',
  description:
    'Bienvenue sur notre site vitrine. Découvrez nos services et notre expertise au service de votre activité.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeScreen />;
}

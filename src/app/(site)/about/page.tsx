// src/app/(site)/about/page.tsx

import AboutScreen from '@/screens/AboutScreen';

export const metadata = {
  title: 'À propos – Votre Nom',
  description:
    'En savoir plus sur notre entreprise, nos valeurs, et notre engagement envers nos clients.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutScreen />;
}

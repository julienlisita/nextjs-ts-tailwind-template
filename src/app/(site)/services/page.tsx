// src/app/(site)/services/page.tsx

import ServicesScreen from '@/screens/ServicesScreen';

export const metadata = {
  title: 'Services – Nom entreprise',
  description:
    'Découvrez nos services sur mesure pour professionnels et particuliers : développement web, accompagnement digital, et plus encore.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesScreen />;
}

// src/app/services/page.tsx

import Services from '@/components/pages/Services';

export const metadata = {
  title: 'Services – Nom entreprise',
  description:
    'Découvrez nos services sur mesure pour professionnels et particuliers : développement web, accompagnement digital, et plus encore.',
  alternates: {
    canonical: 'https://www.exemple.com/services',
  },
};

export default function ServicesPage() {
  return <Services />;
}

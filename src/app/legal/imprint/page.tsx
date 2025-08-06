// src/app/legal/imprint/page.tsx

import Imprint from '@/components/pages/legal/Imprint';

export const metadata = {
  title: 'Mentions légales – Nom entreprise',
  description:
    'Informations légales concernant l’éditeur du site, l’hébergement et la propriété intellectuelle.',
  alternates: {
    canonical: 'https://www.exemple.com/legal/imprint',
  },
};

export default function ImprintPage() {
  return <Imprint />;
}

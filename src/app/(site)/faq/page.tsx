// src/app/(site)/faq/page.tsx

import FaqScreen from '@/screens/FaqScreen';

export const metadata = {
  title: 'FAQ – Nom entreprise',
  description:
    'Trouvez des réponses aux questions fréquentes sur nos services, notre fonctionnement ou notre site.',
  alternates: {
    canonical: 'https://www.exemple.com/faq',
  },
};

export default function FaqPage() {
  return <FaqScreen />;
}

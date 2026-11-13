// src/app/(site)/legal/term/page.tsx

import TermScreen from '@/screens/legal/TermScreen';

export const metadata = {
  title: 'Conditions d’utilisation – Nom entreprise',
  description: 'Conditions générales d’utilisation de notre site et de nos services.',
  alternates: {
    canonical: '/legal/term',
  },
};

export default function TermsPage() {
  return <TermScreen />;
}

// src/app/legal/term/page.tsx

import Terms from '@/components/pages/legal/Term';

export const metadata = {
  title: 'Conditions d’utilisation – Nom entreprise',
  description: 'Conditions générales d’utilisation de notre site et de nos services.',
  alternates: {
    canonical: 'https://www.exemple.com/legal/term',
  },
};

export default function TermsPage() {
  return <Terms />;
}

// src/app/(site)/contact/page.tsx

import Contact from '@/pages/Contact';

export const metadata = {
  title: 'Contact – Nom entreprise',
  description:
    'Besoin d’informations ou d’un devis ? Contactez-nous via notre formulaire ou par téléphone.',
  alternates: {
    canonical: 'https://www.exemple.com/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}

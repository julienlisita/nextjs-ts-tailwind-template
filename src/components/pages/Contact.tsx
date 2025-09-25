// src/components/pages/Contact.tsx

import ContactForm from '@/components/form/ContactForm';
import HeroIntro from '../section/HeroIntro';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <HeroIntro
        icon={<Mail size={40} />}
        title="Contactez-nous"
        subtitle="Besoin d’informations ou d’un devis ? Nous sommes à votre écoute."
        align="center"
      />
      <div className="max-w-2xl w-full mx-auto py-4">
        <ContactForm />
      </div>
    </div>
  );
}

// src/components/pages/Contact.tsx

import { Mail } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import ContactFormSection from '../contact/ContactFormSection';
import ContactInfoSection from '../contact/ContactInfoSection';
import LocationSection from '../contact/LocationSection';

export default function Contact() {
  return (
    <div>
      <PageHero
        icon={<Mail size={40} />}
        title="Contactez-nous"
        subtitle="Besoin d’informations ou d’un devis ? Nous sommes à votre écoute."
        align="center"
      />
      <ContactFormSection />
      <ContactInfoSection />
      <LocationSection align="left" />
    </div>
  );
}

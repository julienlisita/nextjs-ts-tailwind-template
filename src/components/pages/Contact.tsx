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
        title="Nous contacter"
        subtitle="Une question, un besoin ou un message ? Écrivez-nous, nous vous répondrons rapidement."
        align="center"
      />

      <ContactFormSection />

      <ContactInfoSection />

      <LocationSection align="left" />
    </div>
  );
}

// src/components/pages/Contact.tsx

import HeroIntro from '../section/HeroIntro';
import { Mail } from 'lucide-react';
import ContactFormSection from '../section/ContactFormSection';
import ContactInfoSection from '../section/ContactInfoSection';

export default function Contact() {
  return (
    <div>
      <HeroIntro
        icon={<Mail size={40} />}
        title="Contactez-nous"
        subtitle="Besoin d’informations ou d’un devis ? Nous sommes à votre écoute."
        align="center"
      />
      <ContactFormSection
        eyebrow="Contact"
        title="Parlez-nous de votre besoin"
        subtitle="Remplissez le formulaire, nous revenons vers vous rapidement."
        align="left"
        aside={
          <div>
            <h3>Informations</h3>
            <p>
              Nous traitons vos données conformément à notre politique de confidentialité. Vous
              pouvez aussi nous contacter au <strong>+33 6 12 34 56 78</strong>.
            </p>
          </div>
        }
        asidePosition="right"
      />
      <ContactInfoSection />
    </div>
  );
}

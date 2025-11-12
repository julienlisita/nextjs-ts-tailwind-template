// src/components/contact/ContactFormSection.tsx

import ContactForm from '@/components/form/ContactForm'; // adapte le chemin si besoin
import clsx from 'clsx';
import './ContactFormSection.css';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function ContactFormSection() {
  return (
    <Section className={clsx('contact-form-section')}>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Contact"
          title="Parlez-nous de votre besoin"
          subtitle="Remplissez le formulaire, nous revenons vers vous rapidement."
          align="left"
        />
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-start">
          <div className="max-w-2xl bg-white">
            <ContactForm />
          </div>

          <aside className="contact-form-aside">
            <h3 className="text-lg font-semibold mb-2">Informations</h3>
            <p>
              Nous traitons vos données conformément à notre politique de confidentialité. Vous
              pouvez aussi nous contacter au <strong>+33 6 12 34 56 78</strong>.
            </p>
          </aside>
        </div>
      </SectionWrapper>
    </Section>
  );
}

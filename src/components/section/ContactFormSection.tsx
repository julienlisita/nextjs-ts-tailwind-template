// src/components/sections/ContactFormSection.tsx

'use client';

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionTitle from '@/components/ui/SectionTitle';
import Subtitle from '@/components/ui/Subtitle';
import ContactForm from '@/components/form/ContactForm'; // adapte le chemin si besoin
import clsx from 'clsx';
import './ContactFormSection.css';

type ContactFormSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  /** Ajoute une carte de texte à gauche/droite si besoin (ex: infos RGPD, horaires…) */
  aside?: React.ReactNode;
  asidePosition?: 'left' | 'right';
};

export default function ContactFormSection({
  eyebrow = 'Contact',
  title = 'Écrivez-nous',
  subtitle = 'Nous vous répondrons au plus vite.',
  align = 'left',
  className,
  aside,
  asidePosition = 'left',
}: ContactFormSectionProps) {
  // header align (mobile centré, desktop selon align)
  const headerAlign =
    align === 'left' ? 'lg:text-left' : align === 'right' ? 'lg:text-right' : 'lg:text-center';

  const hasAside = Boolean(aside);

  return (
    <Section className={clsx('contact-form-section', className)}>
      <SectionWrapper>
        {(eyebrow || title || subtitle) && (
          <header className={clsx('mb-8 text-center', headerAlign)}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </header>
        )}

        {/* Layout responsive : 1 colonne mobile, 2 colonnes ≥ lg si aside */}
        <div
          className={clsx(
            'grid gap-8',
            hasAside ? 'grid-cols-1 lg:grid-cols-2 items-start' : 'grid-cols-1'
          )}
        >
          {hasAside && asidePosition === 'left' && (
            <div className="contact-form-aside">{aside}</div>
          )}

          <div className="max-w-2xl bg-white">
            <ContactForm />
          </div>

          {hasAside && asidePosition === 'right' && (
            <div className="contact-form-aside">{aside}</div>
          )}
        </div>
      </SectionWrapper>
    </Section>
  );
}

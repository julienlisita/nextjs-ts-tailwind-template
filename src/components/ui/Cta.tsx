'use client';

import Button from '@/components/ui/Button';
import './Cta.css';

type Props = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function Cta({
  title = 'Prêt à démarrer votre projet ?',
  description = 'Contactez-nous dès aujourd’hui et construisons ensemble votre solution.',
  primaryLabel = 'Nous contacter',
  primaryHref = '/contact',
  secondaryLabel = 'Découvrir nos services',
  secondaryHref = '/services',
}: Props) {
  return (
    <section className="cta-section">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
          <Button href={primaryHref} className="cta-btn-primary">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="secondary" className="cta-btn-secondary">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

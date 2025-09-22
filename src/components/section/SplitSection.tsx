// src/components/section/SplitSection.tsx

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import clsx from 'clsx';
import './SplitSection.css';

type SplitSectionProps = {
  /** Eyebrow (petit label au-dessus du titre) */
  eyebrow?: string;
  /** Titre principal */
  title: string;
  /** Sous-titre (optionnel) */
  subtitle?: string;
  /** Texte / contenu principal (string ou ReactNode) */
  content?: React.ReactNode;
  /** Image */
  imageSrc: string;
  imageAlt: string;
  /** Inverser image/texte sur desktop */
  reverse?: boolean;
  /** CTA principal (optionnel) */
  ctaLabel?: string;
  ctaHref?: string;
  /** CTA secondaire (optionnel) */
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Tonalité visuelle (déclinable en CSS) */
  tone?: 'default' | 'muted' | 'brand';
  /** Classe additionnelle */
  className?: string;
  /** Slot libre (ex: liste à puces) */
  children?: React.ReactNode;
};

export default function SplitSection({
  eyebrow,
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  tone = 'default',
  className,
  children,
}: SplitSectionProps) {
  return (
    <Section className={clsx('split', `split--${tone}`, className)}>
      <SectionWrapper>
        <div className={clsx('split__grid', reverse && 'is-reverse')}>
          {/* MEDIA */}
          <div className="split__media">
            <div className="split__img-wrap">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="split__img"
                priority
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="split__body">
            {eyebrow && <p className="split__eyebrow">{eyebrow}</p>}
            <h2 className="split__title">{title}</h2>
            {subtitle && <p className="split__subtitle">{subtitle}</p>}
            {content && <div className="split__text">{content}</div>}
            {children && <div className="split__extra">{children}</div>}

            {(ctaLabel || secondaryCtaLabel) && (
              <div className="split__actions">
                {ctaLabel && ctaHref && (
                  <Button href={ctaHref} variant="primary">
                    {ctaLabel}
                  </Button>
                )}
                {secondaryCtaLabel && secondaryCtaHref && (
                  <Button href={secondaryCtaHref} variant="secondary">
                    {secondaryCtaLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}

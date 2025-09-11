// src/components/sections/FeaturesGrid.tsx

'use client';

import { useMemo, useState } from 'react';
import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/widgets/FeaturedCard';
import clsx from 'clsx';
import './FeaturesGrid.css';

export type FeatureItem = {
  /** Icône (composant ex: Home ou élément ex: <Home />) */
  icon:
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string | React.ReactNode;
};

type FeaturesGridProps = {
  /** Petit label au-dessus du titre */
  eyebrow?: string;
  /** Titre de la section */
  title?: string;
  /** Sous-titre / description */
  subtitle?: string;
  /** Données des cartes */
  items: ReadonlyArray<FeatureItem>;
  /** CTA principal */
  ctaLabel?: string;
  ctaHref?: string;
  /** CTA secondaire */
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Pagination côté client */
  pageSize?: number;
  /** Classes additionnelles */
  className?: string;
  /** Personnalisation de la grille */
  gridClassName?: string;
  /** Alignement du header (propage au titre + eyebrow + sous-titre) */
  titleAlign?: 'left' | 'center' | 'right';
};

export default function FeaturesGrid({
  eyebrow,
  title,
  subtitle,
  items,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  pageSize,
  className,
  gridClassName,
  titleAlign = 'center', // par défaut on garde le comportement d'avant
}: FeaturesGridProps) {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    if (!pageSize) return 1;
    return Math.max(1, Math.ceil(items.length / pageSize));
  }, [items.length, pageSize]);

  const pageItems = useMemo(() => {
    if (!pageSize) return items;
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const hasPagination = Boolean(pageSize) && totalPages > 1;

  const desktopAlign =
    titleAlign === 'left'
      ? 'lg:text-left'
      : titleAlign === 'right'
        ? 'lg:text-right'
        : 'lg:text-center';

  const alignClass = clsx('text-center', desktopAlign);

  return (
    <Section className={clsx('features', className)}>
      <SectionWrapper>
        {(eyebrow || title || subtitle) && (
          <header className={clsx('features__header', alignClass)}>
            {eyebrow && <span className={clsx('features__eyebrow', alignClass)}>{eyebrow}</span>}
            {/* SectionTitle centre déjà par défaut ; on ajoute juste l’align desktop */}
            {title && (
              <SectionTitle align="center" className={desktopAlign}>
                {title}
              </SectionTitle>
            )}
            {subtitle && <p className={clsx('features__subtitle', alignClass)}>{subtitle}</p>}
          </header>
        )}

        <div
          className={clsx(
            'features__grid',
            gridClassName ??
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'
          )}
        >
          {pageItems.map((f, i) => (
            <FeatureCard
              key={`${f.title}-${i}`}
              icon={f.icon}
              title={f.title}
              description={f.description}
              variant="with-header"
              gradient={['#3e8ce0', '#7aa9f5']}
            />
          ))}
        </div>

        {(ctaLabel && ctaHref) || (secondaryCtaLabel && secondaryCtaHref) || hasPagination ? (
          <div className="features__actions">
            <div className="features__cta-group">
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

            {hasPagination && (
              <div className="features__pagination">
                <button
                  type="button"
                  className="features__page-btn"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Précédent
                </button>
                <span className="features__page-info">
                  Page {page} / {totalPages}
                </span>
                <button
                  type="button"
                  className="features__page-btn"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Suivant
                </button>
              </div>
            )}
          </div>
        ) : null}
      </SectionWrapper>
    </Section>
  );
}

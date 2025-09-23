// src/components/sections/FeaturesGrid.tsx

'use client';

import React, { useMemo, useState } from 'react';
import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/widgets/FeaturedCard';
import clsx from 'clsx';
import './FeaturesGrid.css';

/** Type par défaut pour un "feature" */
export type FeatureItem = {
  /** Icône (composant ex: Home ou élément ex: <Home />) */
  icon:
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string | React.ReactNode;
};

type BaseProps = {
  /** Petit label au-dessus du titre */
  eyebrow?: string;
  /** Titre de la section */
  title?: string;
  /** Sous-titre / description */
  subtitle?: string;

  /** CTA principal */
  ctaLabel?: string;
  ctaHref?: string;
  /** CTA secondaire */
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;

  /** Pagination côté client */
  pageSize?: number;

  /** Onglets (facultatif) */
  tabs?: Array<{ label: string; value: string }>;
  defaultTab?: string;

  /** Classes additionnelles */
  className?: string;
  /** Personnalisation de la grille */
  gridClassName?: string;

  /** Alignement du header (propage au titre + eyebrow + sous-titre) */
  align?: 'left' | 'center' | 'right';
};

export type FeaturesGridProps<TItem = FeatureItem> = BaseProps & {
  /** Données des cartes */
  items: ReadonlyArray<TItem>;

  /** Rendu personnalisé d’un item (sinon FeatureCard par défaut) */
  renderItem?: (item: TItem, index: number) => React.ReactNode;

  /** Clé personnalisée pour chaque item (sinon index) */
  getKey?: (item: TItem, index: number) => React.Key;

  /** Filtre par onglet (si tabs fournis) */
  filterByTab?: (item: TItem, tabValue: string) => boolean;
};

export default function FeaturesGrid<TItem = FeatureItem>({
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
  align = 'center',
  tabs,
  defaultTab,
  renderItem,
  getKey,
  filterByTab,
}: FeaturesGridProps<TItem>) {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState<string | undefined>(defaultTab);

  // Filtre par onglet
  const tabbedItems = useMemo(() => {
    if (!tabs || !filterByTab || !activeTab) return items;
    return items.filter((it) => filterByTab(it, activeTab));
  }, [items, tabs, filterByTab, activeTab]);

  // Pagination
  const totalPages = useMemo(() => {
    if (!pageSize) return 1;
    return Math.max(1, Math.ceil(tabbedItems.length / pageSize));
  }, [tabbedItems.length, pageSize]);

  const pageItems = useMemo(() => {
    if (!pageSize) return tabbedItems;
    const start = (page - 1) * pageSize;
    return tabbedItems.slice(start, start + pageSize);
  }, [tabbedItems, page, pageSize]);

  const hasPagination = Boolean(pageSize) && totalPages > 1;

  // Align header responsive
  const desktopAlign =
    align === 'left' ? 'lg:text-left' : align === 'right' ? 'lg:text-right' : 'lg:text-center';
  const alignClass = clsx('text-center', desktopAlign);

  const actionsAlignClass = clsx(
    'items-center justify-center',
    align === 'left' && 'lg:justify-start lg:items-start',
    align === 'center' && 'lg:justify-center lg:items-center',
    align === 'right' && 'lg:justify-end lg:items-end'
  );

  // Rendu par défaut d’un item (FeatureCard)
  const defaultRenderItem = (it: unknown, i: number) => {
    const f = it as FeatureItem;
    return (
      <FeatureCard
        key={i}
        icon={f.icon}
        title={f.title}
        description={f.description}
        variant="with-header"
        gradient={['#3e8ce0', '#7aa9f5']}
      />
    );
  };

  return (
    <Section className={clsx('features', className)}>
      <SectionWrapper>
        {(eyebrow || title || subtitle) && (
          <header className={clsx('features__header', alignClass)}>
            {eyebrow && <span className={clsx('features__eyebrow', alignClass)}>{eyebrow}</span>}
            {title && (
              <SectionTitle align="center" className={desktopAlign}>
                {title}
              </SectionTitle>
            )}
            {subtitle && <p className={clsx('features__subtitle', alignClass)}>{subtitle}</p>}
          </header>
        )}

        {/* Onglets éventuels */}
        {tabs && tabs.length > 0 && (
          <div className="features__tabs">
            <ul className="features__tabs-list">
              {tabs.map((t) => {
                const isActive = activeTab === t.value || (!activeTab && t.value === defaultTab);
                return (
                  <li key={t.value}>
                    <button
                      type="button"
                      className={clsx('features__tab', isActive && 'is-active')}
                      onClick={() => {
                        setActiveTab(t.value);
                        setPage(1); // reset page quand on change d’onglet
                      }}
                    >
                      {t.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Grille */}
        <div
          className={clsx(
            'features__grid',
            gridClassName ??
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'
          )}
        >
          {pageItems.map((item, i) =>
            renderItem ? (
              <React.Fragment key={getKey ? getKey(item, i) : i}>
                {renderItem(item, i)}
              </React.Fragment>
            ) : (
              defaultRenderItem(item, i)
            )
          )}
        </div>

        {/* CTA + Pagination */}
        {(ctaLabel && ctaHref) || (secondaryCtaLabel && secondaryCtaHref) || hasPagination ? (
          <div className={clsx('features__actions', actionsAlignClass)}>
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

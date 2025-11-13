// src/components/data-display/FeatureCard.tsx

'use client';

import React from 'react';
import clsx from 'clsx';
import './FeatureCard.css';

type Align = 'inherit' | 'left' | 'center' | 'right';
type Variant = 'default' | 'gradient' | 'outlined' | 'with-header';
type Tone = 'neutral' | 'brand' | 'success' | 'warning';

type StyleVars = React.CSSProperties & {
  // autoriser les custom properties CSS (design tokens)
  [key: `--${string}`]: string | number;
};

type FeatureCardProps = {
  /** Icône (SVG ou élément React) */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  /** Titre */
  title: string;
  /** Description (cliquable si href est défini) */
  description: string | React.ReactNode;
  /** URL du lien (rend la description cliquable) */
  href?: string;
  /** label du bouton (non utilisé désormais, conservé si usages ailleurs) */
  linkLabel?: string;
  /** Style visuel (structure) */
  variant?: Variant;
  /** Teinte sémantique (applique un set de variables) */
  tone?: Tone;
  /** Largeur via classes Tailwind (ex: w-72, w-full) */
  width?: string;
  /** Hauteur via classes Tailwind (ex: h-80, min-h-64) */
  height?: string;
  /** Alignement global (icône, titre, contenu) */
  align?: Align;
  /** Classes additionnelles */
  className?: string;
  /** Override ponctuel par variables CSS (ex: --card-gradient-start) */
  styleVars?: StyleVars;
};

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  linkLabel, // conservé mais non utilisé
  variant = 'default',
  tone = 'neutral',
  width,
  height,
  align = 'inherit',
  className,
  styleVars,
}: FeatureCardProps) {
  const isWithHeader = variant === 'with-header';

  // map align -> classes responsives (mobile = center, desktop = override)
  const toAlignClasses = (a: Align) => {
    if (a === 'inherit') {
      return { text: undefined, items: undefined, self: undefined };
    }
    if (a === 'left') {
      return {
        text: 'text-center lg:text-left',
        items: 'items-center lg:items-start',
        self: 'self-center lg:self-start',
      };
    }
    if (a === 'right') {
      return {
        text: 'text-center lg:text-right',
        items: 'items-center lg:items-end',
        self: 'self-center lg:self-end',
      };
    }
    return {
      text: 'text-center',
      items: 'items-center',
      self: 'self-center',
    };
  };

  const alignClasses = toAlignClasses(align);

  // Fabrique l’icône avec le bon align-self
  const renderIcon = () =>
    icon ? (
      <div className={clsx('feature-card__icon', alignClasses.self)}>
        {React.isValidElement(icon)
          ? icon
          : React.createElement(icon as React.ComponentType<React.SVGProps<SVGSVGElement>>, {
              className: 'feature-card__icon-inner',
              focusable: false,
              'aria-hidden': true,
            })}
      </div>
    ) : null;

  const isExternal = href ? /^https?:\/\//i.test(href) : false;

  return (
    <article
      className={clsx(
        'feature-card',
        `feature-card--${variant}`,
        `feature-card--${tone}`,
        width,
        height,
        className
      )}
      style={styleVars}
    >
      {isWithHeader && (
        <div
          className={clsx('feature-card__header', 'w-full', alignClasses.text, alignClasses.items)}
        >
          {renderIcon()}
          <h3 className="feature-card__title">{title}</h3>
        </div>
      )}

      {/* Corps de la carte */}
      <div className={clsx('feature-card__body', 'w-full', alignClasses.text, alignClasses.items)}>
        {!isWithHeader && (
          <>
            {renderIcon()}
            <h3 className="feature-card__title">{title}</h3>
          </>
        )}

        {/* Description : rendue cliquable si href est défini */}
        <div className="feature-card__desc">
          {href ? (
            <a
              href={href}
              className="underline hover:no-underline relative z-10 inline-block"
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              {description}
            </a>
          ) : (
            description
          )}
        </div>
      </div>
    </article>
  );
}

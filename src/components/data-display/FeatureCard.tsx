// src/components/data-display/FeatureCard.tsx

'use client';

import React from 'react';
import clsx from 'clsx';
import './FeatureCard.css';

type Align = 'inherit' | 'left' | 'center' | 'right';
type Variant = 'default' | 'gradient' | 'outlined';
type Accent = 'neutral' | 'primary';

type StyleVars = React.CSSProperties & {
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

  /** Style visuel (structure) */
  variant?: Variant;
  /** Accent léger (couleur/hiérarchie) */
  accent?: Accent;
  /** Affiche un header distinct (bandeau + titre) */
  withHeader?: boolean;

  /** Largeur via classes Tailwind (ex: w-72, w-full) */
  width?: string;
  /** Hauteur via classes Tailwind (ex: h-80, min-h-64) */
  height?: string;
  /** Alignement global (icône, titre, contenu) */
  align?: Align;
  /** Classes additionnelles */
  className?: string;
  /** Override ponctuel par variables CSS */
  styleVars?: StyleVars;
};

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

/**
 * Distingue un TYPE de composant (fonction, forwardRef, memo) d'un nœud déjà prêt à rendre.
 * Une icône créée dans un Server Component (`<Icon />`) arrive ici sous forme d'élément React,
 * ou d'objet `lazy` fabriqué par le flux RSC selon le découpage du flux : dans les deux cas
 * elle se rend telle quelle comme enfant, et ne doit jamais passer par `createElement`.
 */
function isComponentType(value: unknown): value is IconComponent {
  if (typeof value === 'function') return true;
  return typeof value === 'object' && value !== null && ('render' in value || 'compare' in value);
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  variant = 'default',
  accent = 'neutral',
  withHeader = false,
  width,
  height,
  align = 'inherit',
  className,
  styleVars,
}: FeatureCardProps) {
  // map align -> classes responsives (mobile = center, desktop = override)
  const toAlignClasses = (a: Align) => {
    if (a === 'inherit') return { text: undefined, items: undefined, self: undefined };
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
    return { text: 'text-center', items: 'items-center', self: 'self-center' };
  };

  const alignClasses = toAlignClasses(align);

  const renderIcon = () =>
    icon ? (
      <div className={clsx('feature-card__icon', alignClasses.self)}>
        {isComponentType(icon)
          ? React.createElement(icon, {
              className: 'feature-card__icon-inner',
              focusable: false,
              'aria-hidden': true,
            })
          : icon}
      </div>
    ) : null;

  const isExternal = href ? /^https?:\/\//i.test(href) : false;

  return (
    <article
      className={clsx(
        'feature-card',
        variant !== 'default' && `feature-card--${variant}`,
        accent === 'primary' && 'feature-card--primary',
        withHeader && 'feature-card--with-header',
        width,
        height,
        className
      )}
      style={styleVars}
    >
      {withHeader && (
        <div
          className={clsx('feature-card__header', 'w-full', alignClasses.text, alignClasses.items)}
        >
          {renderIcon()}
          <h3 className="feature-card__title">{title}</h3>
        </div>
      )}

      <div className={clsx('feature-card__body', 'w-full', alignClasses.text, alignClasses.items)}>
        {!withHeader && (
          <>
            {renderIcon()}
            <h3 className="feature-card__title">{title}</h3>
          </>
        )}

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

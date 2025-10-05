// src/components/widgets/FeatureCard.tsx

'use client';

import React from 'react';
import clsx from 'clsx';
import './FeatureCard.css';
import Button from '../ui/Button';

type Align = 'inherit' | 'left' | 'center' | 'right';

type FeatureCardProps = {
  /** Icône (SVG ou élément React) */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  /** Titre */
  title: string;
  /** Description */
  description: string | React.ReactNode;
  /** url du lien du bouton */
  href?: string;
  /** label du bouton */
  linkLabel?: string;
  /** Dégradé (utilisé avec variant="gradient" ou headerColor) */
  gradient?: [string, string];
  /** Couleur de l’entête (variant="with-header") */
  headerColor?: string;
  /** Style visuel */
  variant?: 'default' | 'gradient' | 'outlined' | 'with-header';
  /** Largeur via classes Tailwind (ex: w-72, w-full) */
  width?: string;
  /** Hauteur via classes Tailwind (ex: h-80, min-h-64) */
  height?: string;
  /** Alignement global (icône, titre, contenu) */
  align?: Align;
  /** Classes additionnelles */
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  linkLabel,
  gradient,
  headerColor,
  variant = 'default',
  width,
  height,
  align = 'inherit',
  className,
}: FeatureCardProps) {
  const isWithHeader = variant === 'with-header';
  const isGradient = variant === 'gradient' && gradient;

  // map align -> classes responsives (mobile = center, desktop = override)
  const toAlignClasses = (a: Align) => {
    if (a === 'inherit') {
      return { text: null, items: null, self: null };
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
            })}
      </div>
    ) : null;

  return (
    <article
      className={clsx('feature-card', `feature-card--${variant}`, width, height, className)}
      style={
        isGradient
          ? { backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }
          : undefined
      }
    >
      {isWithHeader && (
        <div
          className={clsx('feature-card__header', 'w-full', alignClasses.text, alignClasses.items)}
          style={
            gradient
              ? { backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }
              : headerColor
                ? { backgroundColor: headerColor }
                : undefined
          }
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
        <div className="feature-card__desc">{description}</div>
        {href && (
          <div className="feature-card__actions mt-4">
            <Button
              href={href}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${linkLabel ?? 'En savoir plus'} : ${title}`}
            >
              {linkLabel ?? 'En savoir plus'}
              <span className="ml-2" aria-hidden="true">
                &rsaquo;
              </span>
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

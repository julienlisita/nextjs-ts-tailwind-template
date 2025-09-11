// src/components/widgets/FeatureCard.tsx
'use client';

import React from 'react';
import clsx from 'clsx';
import './FeatureCard.css';

type FeatureCardProps = {
  /** Icône (SVG ou élément React) */
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  /** Titre */
  title: string;
  /** Description */
  description: string | React.ReactNode;
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
  /** Classes additionnelles */
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  gradient,
  headerColor,
  variant = 'default',
  width,
  height,
  className,
}: FeatureCardProps) {
  const isWithHeader = variant === 'with-header';
  const isGradient = variant === 'gradient' && gradient;

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
          className="feature-card__header"
          style={
            gradient
              ? { backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }
              : headerColor
                ? { backgroundColor: headerColor }
                : undefined
          }
        >
          {icon && (
            <div className="feature-card__icon">
              {React.isValidElement(icon)
                ? icon
                : React.createElement(icon as React.ComponentType<React.SVGProps<SVGSVGElement>>, {
                    className: 'feature-card__icon-inner',
                  })}
            </div>
          )}
          <h3 className="feature-card__title">{title}</h3>
        </div>
      )}

      {/* Corps de la carte */}
      <div className="feature-card__body">
        {!isWithHeader && (
          <>
            {icon && (
              <div className="feature-card__icon">
                {React.isValidElement(icon)
                  ? icon
                  : React.createElement(
                      icon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
                      {
                        className: 'feature-card__icon-inner',
                      }
                    )}
              </div>
            )}
            <h3 className="feature-card__title">{title}</h3>
          </>
        )}
        <div className="feature-card__desc">{description}</div>
      </div>
    </article>
  );
}

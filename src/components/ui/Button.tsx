// src/components/ui/Button.tsx

'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import './Button.css';

type Variant = 'primary' | 'secondary';

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type AnchorButtonProps = BaseProps & {
  href: string;
  download?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined; // interdit href côté <button>
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

function isAnchorProps(p: ButtonProps): p is AnchorButtonProps {
  return 'href' in p && typeof p.href === 'string' && p.href.length > 0;
}

function isExternal(href: string) {
  return /^https?:\/\//i.test(href) || href.startsWith('//');
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className, children } = props as BaseProps;
  const combinedClassName = clsx('btn', variant, className);

  if (isAnchorProps(props)) {
    const { href, download, target, rel, ...anchorRest } = props;

    const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;

    // 1) Cas natif <a> si externe, target ou download (pour compat total)
    if (isExternal(href) || target || download) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target={target}
          rel={safeRel}
          download={download}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    // 2) Cas interne: utiliser <Link> + <a> enfant (legacyBehavior)
    return (
      <Link href={href} legacyBehavior>
        <a className={combinedClassName} {...anchorRest}>
          {children}
        </a>
      </Link>
    );
  }

  // Branche bouton natif
  const { disabled, ...buttonRest } = props as NativeButtonProps;
  return (
    <button className={combinedClassName} disabled={disabled} {...buttonRest}>
      {children}
    </button>
  );
}

// src/components/ui/Button.tsx

'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import './Button.css';

type Variant = 'primary' | 'secondary';

type ButtonProps = {
  variant?: Variant;
  href?: string;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = 'primary',
  href,
  download,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const combinedClassName = clsx(
    'btn',
    variant,
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        download={download}
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
// src/components/ui/Button.tsx

'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary';

type ButtonProps = {
  variant?: Variant;
  href?: string;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = `
  inline-block
  px-6 py-3 text-sm
  sm:px-5 sm:py-2.5 sm:text-base
  lg:px-6 lg:py-3 lg:text-lg
  font-semibold
  rounded-[15px]
  transition-colors duration-200
`;

const variantStyles: Record<Variant, string> = {
 primary: `
    text-white
    bg-[#D8973C]                  
    hover:text-[#D8973C]             
    hover:bg-[#FAF8F3]              
    hover:outline-2
    hover:outline-[#D8973C]          
    active:bg-transparent
    active:text-[#222222]
  `,
  secondary: `
    text-[#3B2F2F]              
    bg-transparent
    border
    border-[#3B2F2F]         
    hover:bg-[#D8973C]           
    hover:text-white
    hover:border-none
    active:bg-transparent
    active:text-[#222222]
  `
};

const disabledStyles = `
  opacity-50 cursor-not-allowed
`;

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
    baseStyles,
    variantStyles[variant],
    disabled && disabledStyles,
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
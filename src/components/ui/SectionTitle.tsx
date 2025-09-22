// src/components/ui/SectionTitle.tsx

'use client';

import React from 'react';
import { resolveColor } from '@/lib/resolveColor';
import clsx from 'clsx';

type SectionTitleProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
};

export default function SectionTitle({
  id,
  children,
  className = '',
  color = 'inherit',
  align = 'center',
}: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={clsx(
        'text-xl sm:text-2xl lg:text-3xl font-heading font-semibold',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
      style={{ color: resolveColor(color) }}
    >
      {children}
    </h2>
  );
}

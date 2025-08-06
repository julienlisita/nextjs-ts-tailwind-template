// src/components/ui/SectionTitle.tsx

'use client';

import React from 'react';
import { resolveColor } from '@/lib/resolveColor';

type SectionTitleProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
};

export default function SectionTitle({
  id,
  children,
  className = '',
  color = 'inherit',
}: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={`text-xl sm:text-2xl lg:text-3xl font-heading text-center font-semibold ${className}`}
      style={{ color: resolveColor(color) }}
    >
      {children}
    </h2>
  );
}

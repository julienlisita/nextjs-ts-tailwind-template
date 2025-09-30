// src/components/ui/SectionTitle.tsx

'use client';

import clsx from 'clsx';
import './SectionTitle.css';

type SectionTitleProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  align?: 'inherit' | 'left' | 'center' | 'right';
};

export default function SectionTitle({
  id,
  children,
  className = '',
  align = 'inherit',
}: SectionTitleProps) {
  const alignClass =
    align === 'inherit'
      ? null
      : align === 'left'
        ? 'text-left'
        : align === 'right'
          ? 'text-right'
          : 'text-center';

  return (
    <h2 id={id} className={clsx('title', alignClass, className)}>
      {children}
    </h2>
  );
}

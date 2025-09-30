// src/components/ui/Eyebrow.tsx

'use client';

import clsx from 'clsx';
import './Eyebrow.css';

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  align?: 'inherit' | 'left' | 'center' | 'right';
};

export default function Eyebrow({ align = 'inherit', className, children }: EyebrowProps) {
  const alignClass =
    align === 'inherit'
      ? null
      : align === 'left'
        ? 'text-left'
        : align === 'right'
          ? 'text-right'
          : 'text-center';

  return <span className={clsx('eyebrow', alignClass, className)}>{children}</span>;
}

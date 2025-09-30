// src/components/ui/Subtitle.tsx

'use client';

import clsx from 'clsx';
import './Subtitle.css';

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
  align?: 'inherit' | 'left' | 'center' | 'right';
};

export default function Subtitle({ align = 'inherit', className, children }: SubtitleProps) {
  const alignClass =
    align === 'inherit'
      ? null
      : align === 'left'
        ? 'text-left'
        : align === 'right'
          ? 'text-right'
          : 'text-center';

  return <p className={clsx('subtitle', alignClass, className)}>{children}</p>;
}

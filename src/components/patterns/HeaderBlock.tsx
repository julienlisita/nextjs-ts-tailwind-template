// src/components/patterns/HeaderBlock.tsx

'use client';

import clsx from 'clsx';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionTitle from '@/components/ui/SectionTitle';
import Subtitle from '@/components/ui/Subtitle';
import { headerAlignResponsive } from '@/utils/align';

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

export default function HeaderBlock({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: Props) {
  return (
    <header className={clsx('mb-8', headerAlignResponsive(align), className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <SectionTitle>{title}</SectionTitle>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </header>
  );
}

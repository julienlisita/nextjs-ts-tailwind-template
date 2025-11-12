// src/components/ui/SectionTitle.tsx

import clsx from 'clsx';
import './SectionTitle.css';

type SectionTitleProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ id, children, className = '' }: SectionTitleProps) {
  return (
    <h2 id={id} className={clsx('title', className)}>
      {children}
    </h2>
  );
}

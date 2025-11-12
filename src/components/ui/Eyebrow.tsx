// src/components/ui/Eyebrow.tsx

import clsx from 'clsx';
import './Eyebrow.css';

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ className, children }: EyebrowProps) {
  return <span className={clsx('eyebrow', className)}>{children}</span>;
}

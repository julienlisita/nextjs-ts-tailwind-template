// src/components/ui/Subtitle.tsx

import clsx from 'clsx';
import './Subtitle.css';

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Subtitle({ className, children }: SubtitleProps) {
  return <p className={clsx('subtitle', className)}>{children}</p>;
}

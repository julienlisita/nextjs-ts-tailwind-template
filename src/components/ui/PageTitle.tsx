// src/components/ui/PageTitle.tsx

import { resolveColor } from '@/lib/resolveColor';

type PageTitleProps = {
  className?: string;
  children: React.ReactNode;
  color?: string;
};

export default function PageTitle({ className = '', children, color = 'heading' }: PageTitleProps) {
  return (
    <h1
      className={`${className}
        text-2xl sm:text-3xl lg:text-5xl
        font-heading font-bold
        text-center
      `}
      style={{ color: resolveColor(color) }}
    >
      {children}
    </h1>
  );
}

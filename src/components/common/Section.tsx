// src/components/common/Section.tsx

import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
};

const resolveColor = (color: string): string => {
  if (
    color.startsWith('#') ||
    color.startsWith('rgb') ||
    color.startsWith('hsl')
  ) {
    return color;
  }
  return `var(--color-${color})`;
};

export default function Section({
  children,
  className = '',
  bgColor = 'transparent',
}: SectionProps) {
  return (
    <section
      className={className}
      style={{ backgroundColor: resolveColor(bgColor) }}
    >
      {children}
    </section>
  );
}
// src/components/home/ServicesGrid.tsx

import type React from 'react';
import FeatureCard from '../data-display/FeatureCard';
import { RevealGroup, RevealItem } from '../animations/RevealGroup';
import { ICONS, type IconKey } from '@/utils/icons';
import type { FeatureItem } from '@/types/feature';

type Props = {
  items: ReadonlyArray<FeatureItem>;
};

function resolveIcon(icon: FeatureItem['icon']): React.ReactElement | undefined {
  // IconKey → composant depuis le registry ICONS
  if (typeof icon === 'string') {
    const Icon = ICONS[icon as IconKey];
    return Icon ? <Icon /> : undefined;
  }

  // ComponentType (ex: (props) => <svg ... />)
  if (typeof icon === 'function') {
    const Icon = icon as React.ComponentType<React.SVGProps<SVGSVGElement>>;
    return <Icon />;
  }

  // ReactElement
  return icon as React.ReactElement;
}

export default function ServicesGrid({ items }: Props) {
  if (items.length === 0) {
    return (
      <p className="font-ui text-sm" style={{ color: 'var(--color-muted)' }}>
        Aucun service disponible.
      </p>
    );
  }

  return (
    <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      {items.map((s, i) => (
        // `flex` + `w-full` : la carte reste étirée à la hauteur de la rangée
        <RevealItem key={s.title ?? i} className="flex">
          <FeatureCard
            icon={resolveIcon(s.icon)}
            title={s.title}
            description={s.description}
            href={s.href}
            variant="gradient"
            accent="primary"
            align="center"
            width="w-full"
          />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

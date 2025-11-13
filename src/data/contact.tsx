// src/data/contact.ts

import type { FeatureItem } from '@/components/patterns/FeaturesGrid';

export const contactInfos: ReadonlyArray<FeatureItem> = [
  {
    icon: 'Phone',
    title: 'Téléphone',
    description: '06 12 34 56 78',
    href: 'tel:+33612345678',
  },
  {
    icon: 'Mail',
    title: 'Email',
    description: 'contact@company-care.fr',
    href: 'mailto:contact@company-care.fr',
  },
  {
    icon: 'MapPin',
    title: 'Adresse',
    description: '12 rue Exemple, 75000 Paris',
    href: 'https://www.google.com/maps/search/?api=1&query=12 rue Exemple, 75000 Paris',
  },
] as const;

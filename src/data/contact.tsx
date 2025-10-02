// src/data/contact.tsx

import type { FeatureItem } from '@/components/section/FeaturesGrid';
import { Phone, Mail, MapPin } from 'lucide-react';

export const contactInfos: ReadonlyArray<FeatureItem> = [
  {
    icon: Phone,
    title: 'Téléphone',
    description: (
      <a href="tel:+33612345678" className="underline hover:no-underline">
        +33 6 12 34 56 78
      </a>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    description: (
      <a href="mailto:contact@company-care.fr" className="underline hover:no-underline">
        contact@company-care.fr
      </a>
    ),
  },
  {
    icon: MapPin,
    title: 'Adresse',
    description: (
      <a
        href="https://www.google.com/maps/search/?api=1&query=12 rue Exemple, 75000 Paris"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        12 rue Exemple, 75000 Paris
      </a>
    ),
  },
] as const;

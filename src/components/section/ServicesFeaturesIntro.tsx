// src/components/sections/ServicesFeatures.tsx

'use client';

import { Home, Users, Sparkles, FileText, Moon, Handshake } from 'lucide-react';
import FeaturesGrid, { type FeatureItem } from './FeaturesGrid';

const items: FeatureItem[] = [
  {
    icon: Home,
    title: 'Aide à domicile',
    description:
      'Aide aux gestes du quotidien, préparation de repas, accompagnement bienveillant à la maison.',
  },
  {
    icon: Users,
    title: 'Accompagnement',
    description: 'Rendez-vous médicaux, courses, sorties : une présence rassurante et organisée.',
  },
  {
    icon: Sparkles,
    title: 'Entretien du logement',
    description: 'Ménage, linge, entretien courant — un cadre de vie propre et confortable.',
  },
  {
    icon: FileText,
    title: 'Aide administrative',
    description: 'Dossiers, courriers, démarches en ligne : nous simplifions votre quotidien.',
  },
  {
    icon: Moon,
    title: 'Présence de nuit',
    description:
      'Surveillance et aide nocturne pour plus de sérénité, en continu ou ponctuellement.',
  },
  {
    icon: Handshake,
    title: 'Répit des aidants',
    description: 'Relais temporaire auprès du proche aidé, pour souffler en toute confiance.',
  },
];

export default function ServicesFeatures() {
  return (
    <FeaturesGrid
      eyebrow="Nos Services"
      title="Ce que nous proposons"
      subtitle="Un accompagnement complet et bienveillant au quotidien."
      items={items}
      ctaLabel="En savoir plus"
      ctaHref="/services"
      secondaryCtaLabel="Nous contacter"
      secondaryCtaHref="/contact"
      align="left"
    />
  );
}

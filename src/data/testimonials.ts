// src/data/testimonials.ts

import type { Testimonial } from '@/types/testimonial';

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    id: 1,
    name: 'Lesly Dupont',
    role: 'Cliente',
    company: 'Compagnie Care Services',
    quote:
      'Une équipe professionnelle et à l’écoute, qui a su répondre parfaitement à nos attentes.',
    rating: 5,
    avatarUrl: '/images/clients/lesly.jpg',
    date: 'Août 2025',
    highlight: true,
  },
  {
    id: 2,
    name: 'Marc Lambert',
    role: 'Gérant',
    company: 'Agence LM Nettoyage',
    quote: 'Le travail a été rapide et soigné. Je suis impressionné par la qualité du design.',
    rating: 4.5,
    date: 'Juillet 2025',
  },
  {
    id: 3,
    name: 'Sophie Martin',
    role: 'Fondatrice',
    company: 'Bien-Être & Santé',
    quote:
      'Une vraie collaboration constructive. Julien a pris le temps de comprendre nos besoins pour livrer un site moderne et efficace.',
    rating: 5,
    avatarUrl: '/images/clients/sophie.jpg',
    date: 'Juin 2025',
  },
  {
    id: 4,
    name: 'Antoine Rivière',
    role: 'Responsable communication',
    company: 'StartUp Bordeaux',
    quote:
      'Excellent sens du détail et une approche très professionnelle. La flexibilité et la réactivité ont été remarquables.',
    rating: 4,
    date: 'Mai 2025',
  },
  {
    id: 5,
    name: 'Claire Dubois',
    role: 'Coach sportive',
    quote:
      'Mon site vitrine est clair, fluide et inspire confiance. Mes clients adorent la simplicité et l’esthétique.',
    rating: 5,
    avatarUrl: '/images/clients/claire.jpg',
    date: 'Mars 2025',
  },
  {
    id: 6,
    name: 'Hugo Bernard',
    role: 'Entrepreneur',
    company: 'HB Consulting',
    quote:
      'Je recommande vivement : grande capacité d’écoute et une réalisation impeccable. Le résultat est au-dessus de mes attentes.',
    rating: 4.5,
    date: 'Février 2025',
    highlight: false,
  },
] as const;

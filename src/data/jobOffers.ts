// src/data/jobOffers.ts

import type { JobOffer } from '@/types/job';

export const jobOffers: ReadonlyArray<JobOffer> = [
  {
    id: 1,
    title: 'Poste générique',
    location: 'Bordeaux (33)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacus nec velit pretium interdum.',
    contractType: 'CDI - Temps plein',
    publishedAt: '2025-08-20T09:00:00Z',
  },
  {
    id: 2,
    title: 'Poste administratif',
    location: 'Mérignac (33)',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contractType: 'CDD - Temps plein',
    publishedAt: '2025-08-12T08:30:00Z',
  },
  {
    id: 3,
    title: 'Poste générique',
    location: 'Pessac (33)',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    contractType: 'CDI - Temps partiel',
    publishedAt: '2025-08-05T18:00:00Z',
  },
  {
    id: 4,
    title: 'Responsable de secteur',
    location: 'Libourne (33)',
    description:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    contractType: 'CDI - Temps plein',
    publishedAt: '2025-07-28T10:15:00Z',
  },
  {
    id: 5,
    title: 'Poste week-end',
    location: 'Angoulême (16)',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    contractType: 'CDD - Week-end',
    publishedAt: '2025-07-20T07:45:00Z',
  },
  {
    id: 6,
    title: 'Stage communication',
    location: 'Bordeaux (33)',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    contractType: 'Stage - 2 à 4 mois',
    publishedAt: '2025-07-10T09:00:00Z',
  },
] as const;

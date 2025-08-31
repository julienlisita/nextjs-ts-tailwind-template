// src/data/news.ts

import type { NewsItem } from '@/types/news';

export const newsItems: ReadonlyArray<NewsItem> = [
  {
    id: 1,
    slug: 'aide-a-domicile-nouveaux-dispositifs',
    title: "Aide à domicile : les nouveaux dispositifs d'accompagnement",
    description: 'Un article sur les évolutions récentes concernant l’aide à domicile en France.',
    source: 'Service-public.fr',
    url: 'https://www.service-public.fr/particuliers/actualites/A17123',
    date: '5 août 2025',
    publishedAt: '2025-08-05T08:00:00Z',
    isPublished: true,
  },
  {
    id: 2,
    slug: 'revalorisation-metier-auxiliaire-de-vie',
    title: 'Revalorisation du métier d’auxiliaire de vie',
    description:
      'Zoom sur les nouvelles mesures pour améliorer les conditions de travail dans le secteur.',
    source: 'Santé Magazine',
    url: 'https://www.santemagazine.fr/actualites/auxiliaires-de-vie-revalorisation-emploi',
    date: '28 juillet 2025',
    publishedAt: '2025-07-28T08:00:00Z',
    isPublished: true,
  },
  {
    id: 3,
    slug: 'ccs-intervention-angouleme',
    title: 'CCS en action : retour sur notre intervention à Angoulême',
    description:
      'Découvrez notre dernier accompagnement personnalisé dans le cadre d’une aide à domicile renforcée.',
    source: 'Company Care Service',
    url: 'https://www.exemple.com/actualites/intervention-angouleme',
    date: '20 juillet 2025',
    publishedAt: '2025-07-20T08:00:00Z',
    isPublished: true,
  },
  {
    id: 4,
    slug: 'plan-canicule-conseils-aidants',
    title: 'Plan canicule : conseils essentiels pour les aidants',
    description:
      'Checklist de prévention et gestes à adopter auprès des personnes fragiles pendant les fortes chaleurs.',
    source: 'Santé publique France',
    url: 'https://www.santepubliquefrance.fr/determinants-de-sante/climat/chaleurs-intenses',
    date: '15 juillet 2025',
    publishedAt: '2025-07-15T08:00:00Z',
    isPublished: true,
  },
  {
    id: 5,
    slug: 'aides-financieres-apa-2025',
    title: 'Quelles aides financières pour rester à domicile en 2025 ?',
    description:
      "Panorama des dispositifs (APA, aides CAF, caisses de retraite) pour l'aide à domicile.",
    source: 'Service-public.fr',
    url: 'https://www.service-public.fr/particuliers/vosdroits/F10009',
    date: '10 juillet 2025',
    publishedAt: '2025-07-10T08:00:00Z',
    isPublished: true,
  },
  {
    id: 6,
    slug: 'prevention-chutes-domicile',
    title: 'Prévention des chutes à domicile : 7 réflexes simples',
    description: 'Aménagements et bonnes pratiques pour sécuriser le quotidien des seniors.',
    source: 'Assurance Maladie',
    url: 'https://www.ameli.fr/assure/sante/themes/prevention-des-chutes',
    date: '1 juillet 2025',
    publishedAt: '2025-07-01T08:00:00Z',
    isPublished: true,
  },
  {
    id: 7,
    slug: 'aidants-proches-droits-repit',
    title: 'Aidants proches : vos droits au répit',
    description: 'Solutions de répit et démarches pour les aidants familiaux : ce que dit la loi.',
    source: 'Service-public.fr',
    url: 'https://www.service-public.fr/particuliers/vosdroits/F34332',
    date: '25 juin 2025',
    publishedAt: '2025-06-25T08:00:00Z',
    isPublished: true,
  },
] as const;

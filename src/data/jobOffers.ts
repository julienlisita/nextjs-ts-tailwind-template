// src/data/jobOffers.ts

import type { JobOffer } from '@/types/job';

export const jobOffers: ReadonlyArray<JobOffer> = [
 {
      id: 1,
      title: 'Auxiliaire de vie – Temps plein',
      location: 'Bordeaux (33)',
      description:
        "Accompagnement des personnes âgées à domicile (toilette, repas, déplacements). Horaires variables, véhicule apprécié.",
      publishedAt: '2025-08-20T09:00:00Z',
    },
    {
      id: 2,
      title: 'Assistant administratif – Services à la personne',
      location: 'Mérignac (33)',
      description:
        "Accueil téléphonique, gestion des plannings, rédaction de devis/factures. Maîtrise bureautique exigée.",
      publishedAt:'2025-08-12T08:30:00Z',
    },
    {
      id: 3,
      title: 'Auxiliaire de vie – Temps partiel (soirées)',
      location: 'Pessac (33)',
      description:
        "Interventions en soirée (18h–22h). Aide au repas, préparation au coucher, échanges et présence rassurante.",
      publishedAt: '2025-08-05T18:00:00Z',
    },
    {
      id: 4,
      title: 'Responsable de secteur',
      location: 'Libourne (33)',
      description:
        "Pilotage des plannings, coordination équipe/bénéficiaires, suivi qualité. Expérience en médico-social requise.",
      publishedAt: '2025-07-28T10:15:00Z',
    },
    {
      id: 5,
      title: 'Auxiliaire de vie – Week-ends',
      location: 'Angoulême (16)',
      description:
        "Missions les samedis et dimanches en roulement. Permis B + véhicule souhaités. Indemnités kilométriques.",
      publishedAt: '2025-07-20T07:45:00Z',
    },
    {
      id: 6,
      title: 'Stagiaire communication',
      location: 'Bordeaux (33)',
      description:
        "Soutien aux actions de communication (réseaux sociaux, articles, visuels). Stage 2–4 mois, convention requise.",
      publishedAt: '2025-07-10T09:00:00Z',
    },
] as const;

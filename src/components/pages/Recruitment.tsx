// src/components/pages/Recruitment.tsx

import { getPublicJobOffers } from '@/services/jobOffers';
import RecruitmentClient, { JobOffer } from '@/components/pages/RecruitmentClient';

export default async function Recruitment() {
  const offers = await getPublicJobOffers() as JobOffer[];

  // const offers = [
  //   {
  //     id: 1,
  //     title: 'Assistant(e) de vie à domicile – Secteur Bordeaux',
  //     location: 'Bordeaux (33)',
  //     description:
  //       'Accompagnement quotidien des personnes âgées ou en situation de handicap à leur domicile. Temps partiel ou temps plein selon disponibilités.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Aide-ménager(ère) – Secteur Angoulême',
  //     location: 'Angoulême (16)',
  //     description:
  //       'Entretien du domicile, aide au repas et courses. Permis B recommandé. Poste en CDI ou CDD selon profil.',
  //   },
  // ];
  return <RecruitmentClient offers={offers} />;
}

// src/components/pages/Recruitment.tsx

import PageTitle from "@/components/ui/PageTitle"
import { JobOfferCard } from "../widgets/JobOfferCard";

export default function Recruitment() {

const jobOffers = [
  {
    id: 1,
    title: 'Assistant(e) de vie à domicile – Secteur Bordeaux',
    location: 'Bordeaux (33)',
    description:
      'Accompagnement quotidien des personnes âgées ou en situation de handicap à leur domicile. Temps partiel ou temps plein selon disponibilités.',
  },
  {
    id: 2,
    title: 'Aide-ménager(ère) – Secteur Angoulême',
    location: 'Angoulême (16)',
    description:
      'Entretien du domicile, aide au repas et courses. Permis B recommandé. Poste en CDI ou CDD selon profil.',
  },
];
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Recrutement</PageTitle>
      <div className="flex flex-wrap justify-center gap-6">
        {jobOffers.map((offer) => {
          return <JobOfferCard 
                    key={offer.id}
                    title={offer.title}
                    location={offer.location}
                    description={offer.description}
                  />
        } )
        }
      </div>
    </div>
  );
}
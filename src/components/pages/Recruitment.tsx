// src/components/pages/Recruitment.tsx

'use client';

import PageTitle from '@/components/ui/PageTitle';
import { JobOfferCard } from '../widgets/JobOfferCard';
import Modal from '../ui/Modal';
import JobApplicationForm from '../form/JobApplicationForm';
import { useState } from 'react';

export default function Recruitment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);

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

  const handleApply = (title: string) => {
    setSelectedJobTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Recrutement</PageTitle>
      <div className="flex flex-wrap justify-center gap-6">
        {jobOffers.map((offer) => (
          <JobOfferCard
            key={offer.id}
            title={offer.title}
            location={offer.location}
            description={offer.description}
            onApply={() => handleApply(offer.title)}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JobApplicationForm jobTitle={selectedJobTitle ?? ''} />
      </Modal>
    </div>
  );
}

// src/components/pages/Recruitment.tsx

'use client';

import PageTitle from '@/components/ui/PageTitle';
import { JobOfferCard } from '../widgets/JobOfferCard';
import Modal from '../ui/Modal';
import JobApplicationForm from '../form/JobApplicationForm';
import { useState } from 'react';
import Section from '../common/Section';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../common/SectionWrapper';

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
    <div className='py-8 sm:py-10 md:py-14 lg:py-20'>
      <PageTitle>Recrutement</PageTitle>
      <Section>
        <SectionWrapper>
          <SectionTitle>Nos offres actuelles</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
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
        </SectionWrapper>
      </Section>

      <Section>
        <SectionWrapper>
          <SectionTitle>Pourquoi nous rejoindre ?</SectionTitle>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Chez Company Care Service, nous valorisons l’humain avant tout. Notre ambiance familiale, notre accompagnement quotidien
            et notre souci de l’éthique font de nous un lieu de travail chaleureux et engagé.
          </p>
        </SectionWrapper>
      </Section>

      <Section>
        <SectionWrapper>
          <SectionTitle>Questions fréquentes</SectionTitle>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Retrouvez ici les réponses aux questions les plus posées concernant les horaires, les contrats, ou les possibilités d’évolution.
          </p>
        </SectionWrapper>
      </Section>

       {/* Modal de candidature */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JobApplicationForm jobTitle={selectedJobTitle ?? ''} />
      </Modal>
    </div>
  );
}

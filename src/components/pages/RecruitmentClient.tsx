// src/components/pages/RecruitmentClient.tsx

'use client';

import PageTitle from '@/components/ui/PageTitle';
import Modal from '../ui/Modal';
import JobApplicationForm from '../form/JobApplicationForm';
import { useState } from 'react';
import Section from '../common/Section';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../common/SectionWrapper';
import type { JobOffer } from '@/types/job';
import JobOffersSection from '../section/JobOffersSection';
import Cta from '../ui/Cta';

export default function RecruitmentClient({ offers }: { offers: ReadonlyArray<JobOffer> }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);

  const handleApply = (title: string) => {
    setSelectedJobTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Recrutement</PageTitle>
      <JobOffersSection title="Nos offres actuelles" items={offers} onApply={handleApply} />
      <Section>
        <SectionWrapper>
          <SectionTitle>Pourquoi nous rejoindre ?</SectionTitle>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Chez Company Care Service, nous valorisons l’humain avant tout. Notre ambiance
            familiale, notre accompagnement quotidien et notre souci de l’éthique font de nous un
            lieu de travail chaleureux et engagé.
          </p>
        </SectionWrapper>
      </Section>

      <Section>
        <SectionWrapper>
          <SectionTitle>Questions fréquentes</SectionTitle>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Retrouvez ici les réponses aux questions les plus posées concernant les horaires, les
            contrats, ou les possibilités d’évolution.
          </p>
        </SectionWrapper>
      </Section>
      <Cta />

      {/* Modal de candidature */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JobApplicationForm jobTitle={selectedJobTitle ?? ''} />
      </Modal>
    </div>
  );
}

// src/components/pages/RecruitmentClient.tsx

'use client';

import PageTitle from '@/components/ui/PageTitle';
import Modal from '../ui/Modal';
import JobApplicationForm from '../form/JobApplicationForm';
import { useEffect, useState } from 'react';
import Section from '../common/Section';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../common/SectionWrapper';
import { useRouter, useSearchParams } from 'next/navigation';

export default function RecruitmentClient() {
  const router = useRouter();
  const search = useSearchParams();
  const applyTitle = search.get('apply');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(Boolean(applyTitle));
  }, [applyTitle]);

  const close = () => {
    setOpen(false);
    router.replace('/recruitment', { scroll: false });
  };

  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Recrutement</PageTitle>

      <Section>
        <SectionWrapper>
          <SectionTitle>Pourquoi nous rejoindre ?</SectionTitle>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Chez Company Care Service, nous valorisons l’humain avant tout…
          </p>
        </SectionWrapper>
      </Section>

      <Section>
        <SectionWrapper>
          <SectionTitle>Questions fréquentes</SectionTitle>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Retrouvez ici les réponses aux questions les plus posées…
          </p>
        </SectionWrapper>
      </Section>
      <Modal isOpen={isOpen} onClose={close}>
        <JobApplicationForm jobTitle={applyTitle ?? ''} />
      </Modal>
    </div>
  );
}

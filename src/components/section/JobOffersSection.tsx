// src/components/sections/JobOffersSection.tsx

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import { JobOfferCard } from '@/components/widgets/JobOfferCard';
import type { JobOffer } from '@/types/job';

type Props = {
  title?: string;
  items: ReadonlyArray<JobOffer>;
  limit?: number;
  className?: string;
  onApply?: (title: string) => void; // pour réutiliser la modale si besoin
};

export default function JobOffersSection({
  title = 'Nos offres actuelles',
  items,
  limit,
  className,
  onApply,
}: Props) {
  const list = typeof limit === 'number' ? items.slice(0, Math.max(0, limit)) : items;
  if (!list.length) return null;

  return (
    <Section className={className}>
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 justify-center">
          {list.map((offer) => (
            <JobOfferCard
              key={offer.id}
              title={offer.title}
              location={offer.location}
              description={offer.description}
              onApply={onApply ? () => onApply(offer.title) : undefined}
            />
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}

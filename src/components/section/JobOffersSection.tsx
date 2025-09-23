// src/components/sections/JobOffersSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
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
    <FeaturesGrid<JobOffer>
      title={title}
      titleAlign="center"
      items={list}
      className={className}
      gridClassName="grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8"
      pageSize={5}
      renderItem={(offer) => (
        <JobOfferCard
          key={offer.id}
          title={offer.title}
          location={offer.location}
          description={offer.description}
          onApply={onApply ? () => onApply(offer.title) : undefined}
        />
      )}
      getKey={(offer) => offer.id}
    />
  );
}

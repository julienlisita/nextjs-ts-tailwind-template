// src/components/recruitment/JobOffersSection.tsx

'use client';

import type { JobOffer } from '@/types/job';
import { JobOfferCard } from '../data-display/JobOfferCard';
import FeaturesGrid from '../patterns/FeaturesGrid';

type Props = { items: ReadonlyArray<JobOffer> };

export default function JobOffersSection({ items }: Props) {
  return (
    <FeaturesGrid<JobOffer>
      eyebrow="NOS OFFRES D’EMPLOI"
      align="left"
      items={items}
      gridClassName="grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8"
      pageSize={5}
      renderItem={(offer) => (
        <JobOfferCard
          key={offer.id}
          title={offer.title}
          location={offer.location}
          description={offer.description}
          contractType={offer.contractType}
          publishedAt={offer.publishedAt}
        />
      )}
      getKey={(offer) => offer.id}
    />
  );
}

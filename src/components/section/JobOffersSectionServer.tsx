// src/components/sections/JobOffersSection.server.tsx

import JobOffersSection from './JobOffersSection';
import { getPublicJobOffersServer } from '@/server/services/jobOffers.server'; // garde ton chemin actuel

type Props = {
  title?: string;
  limit?: number;
  className?: string;
  container?: boolean;
};

export default async function JobOffersSectionServer({
  title,
  limit,
  className,
  container = true,
}: Props) {
  const offers = await getPublicJobOffersServer();

  const content = (
    <JobOffersSection title={title} items={offers} limit={limit} className={className} />
  );

  return container ? <div className="container mx-auto px-4">{content}</div> : content;
}

// src/components/sections/JobOffersSection.server.tsx

import JobOffersSection from './JobOffersSection';
import { getPublicJobOffersServer } from '@/server/services/jobOffers.server'; // garde ton chemin actuel

type Props = {
  title?: string;
  limit?: number;
  className?: string;
  container?: boolean;
  onApply?: (title: string) => void; // ignoré côté server, utile si tu le remonte côté client
};

export default async function JobOffersSectionServer({
  title,
  limit,
  className,
  container = true,
  onApply, // note: ne sera pas passé si ce composant reste RSC
}: Props) {
  const offers = await getPublicJobOffersServer();

  const content = (
    <JobOffersSection title={title} items={offers} limit={limit} className={className} />
  );

  return container ? <div className="container mx-auto px-4">{content}</div> : content;
}

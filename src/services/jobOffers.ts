// src/services/jobOffers.ts

export type JobOffer = {
  id: number;
  title: string;
  location: string;
  description: string;
  publishedAt: string;
};

export async function getPublicJobOffers(): Promise<JobOffer[]> {

  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const res = await fetch(`${base}/api/job-offers`, { next: { revalidate: 60 } });

  if (!res.ok) throw new Error('Failed to fetch job offers');
  const data = await res.json();
  return data.jobOffers;
}
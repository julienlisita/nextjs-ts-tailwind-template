// src/server/services/job-offer.service.ts

import { jobOfferRepo } from '../repositories/job-offer.repo';

export function listJobOffers() {
  return jobOfferRepo.list();
}

export function getJobOffer(id: number) {
  return jobOfferRepo.findById(id);
}

export function createJobOffer(input: { title: string; location: string; description: string }) {
  return jobOfferRepo.create({ ...input, publishedAt: new Date() });
}

export function updateJobOffer(
  id: number,
  input: Partial<{ title: string; location: string; description: string }>
) {
  return jobOfferRepo.update(id, input);
}

export function deleteJobOffer(id: number) {
  return jobOfferRepo.remove(id);
}

// Option lisibilité: alias "public"
export const listPublicJobOffers = listJobOffers;

// src/types/job.ts

export type JobOffer = {
  id: number;
  title: string;
  location: string;
  description: string;
  contractType: string;
  publishedAt: string; // ISO
};

// src/server/repositories/job-offer.repo.ts

import { prisma } from '@/lib/prisma';

export const jobOfferRepo = {
  list() {
    return prisma.jobOffer.findMany({ orderBy: { publishedAt: 'desc' } });
  },
  findById(id: number) {
    return prisma.jobOffer.findUnique({ where: { id } });
  },
  create(data: { title: string; location: string; description: string; publishedAt?: Date }) {
    return prisma.jobOffer.create({
      data: { ...data, publishedAt: data.publishedAt ?? new Date() },
    });
  },
  update(id: number, data: Partial<{ title: string; location: string; description: string }>) {
    return prisma.jobOffer.update({ where: { id }, data });
  },
  remove(id: number) {
    return prisma.jobOffer.delete({ where: { id } });
  },
};

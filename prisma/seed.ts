// prisma/seed.ts

import { Prisma, PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { newsItems } from '../src/data/news';
import { jobOffers } from '../src/data/jobOffers';
import { testimonials } from '../src/data/testimonials';

import type { NewsItem } from '../src/types/news';
import type { JobOffer } from '../src/types/job';
import type { Testimonial } from '../src/types/testimonial';

const prisma = new PrismaClient();

function stripId<T extends { id?: unknown }>(item: T): Omit<T, 'id'> {
  const { id, ...rest } = item as any;
  return rest as Omit<T, 'id'>;
}
function toDate<T extends { publishedAt?: string }>(item: T) {
  return {
    ...item,
    publishedAt: item.publishedAt ? new Date(item.publishedAt) : new Date(),
  };
}

export async function main() {
  // Admins

  const admins = [
    { email: 'admin1@example.com', name: 'Admin One', password: 'ChangeMe123!' },
    { email: 'admin2@example.com', name: 'Admin Two', password: 'ChangeMe123!' },
    { email: 'admin3@example.com', name: 'Admin Three', password: 'ChangeMe123!' },
  ];

  for (const admin of admins) {
    const passwordHash = await bcrypt.hash(admin.password, 10);

    await prisma.user.upsert({
      where: { email: admin.email },
      update: {},
      create: {
        email: admin.email,
        password: passwordHash,
        name: admin.name,
        role: Role.ADMIN,
      },
    });
  }

  // Testimonials

  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
    data: testimonials.map((t: Testimonial) => stripId(t)),
  });

  // News

  await prisma.newsItem.deleteMany();
  await prisma.newsItem.createMany({
    data: (newsItems as NewsItem[]).map((item) =>
      toDate({
        ...stripId(item),
        // éviter undefined pour les champs NULLables
        coverImage: (item as any).coverImage ?? null,
      })
    ) as Prisma.NewsItemCreateManyInput[],
  });

  // Job offers

  await prisma.jobOffer.deleteMany();
  await prisma.jobOffer.createMany({
    data: (jobOffers as JobOffer[]).map((offer) =>
      toDate(stripId(offer))
    ) as Prisma.JobOfferCreateManyInput[],
  });

  // Reservation slots (exemple)
  await prisma.reservation.deleteMany();
  await prisma.reservationSlot.deleteMany();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 0, 0, 0);

  const slotsData = Array.from({ length: 5 }).map((_, i) => {
    const start = new Date(tomorrow);
    start.setHours(9 + i, 0, 0, 0);
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + 60);

    return {
      startAt: start,
      endAt: end,
      status: 'AVAILABLE' as const,
    };
  });

  await prisma.reservationSlot.createMany({ data: slotsData });
}

if (require.main === module) {
  main()
    .then(async () => {
      console.log('Seed des admins terminé');
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error('Échec du seed', e);
      await prisma.$disconnect();
      process.exit(1);
    });
}

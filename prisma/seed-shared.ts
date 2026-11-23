// prisma/seed-shared.ts
// Données et transformations communes à seed.ts (initialisation) et seed-reset.ts (réinitialisation).

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Prisma, PrismaClient, Role } from '../src/generated/prisma/client';
import { fromZonedTime } from 'date-fns-tz';
import { newsItems } from '../src/data/news';
import { jobOffers } from '../src/data/jobOffers';
import { testimonials } from '../src/data/testimonials';

import type { NewsItem } from '../src/types/news';
import type { JobOffer } from '../src/types/job';
import type { Testimonial } from '../src/types/testimonial';

const TZ = 'Europe/Paris';

// ---------- helpers ----------

export function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(
      `Missing ${name}. Set ${name} in your .env file (or in the environment) before running the seed.`
    );
  }
  return v;
}

/** Client Prisma 7 (adaptateur PostgreSQL) pour les scripts de seed. */
export function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: requireEnv('DATABASE_URL') });
  return new PrismaClient({ adapter });
}

function pad2(n: number) {
  return String(n).padStart(2, '0');
}

// retourne "YYYY-MM-DD" basé sur le jour Paris (pas celui de la machine)
function parisDateKey(d: Date) {
  const parts = new Intl.DateTimeFormat('fr-FR', {
    timeZone: TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(d);

  const get = (type: string) => parts.find((p) => p.type === type)?.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

function stripId<T extends { id?: unknown }>(item: T): Omit<T, 'id'> {
  const copy: Partial<T> = { ...item };
  delete copy.id;
  return copy as Omit<T, 'id'>;
}

function toDate<T extends { publishedAt?: string }>(item: T) {
  return {
    ...item,
    publishedAt: item.publishedAt ? new Date(item.publishedAt) : new Date(),
  };
}

/** Une ligne de log par table : `[seed] Table : x créé(s), y ignoré(s) …` */
export function logTable(table: string, details: string) {
  console.log(`  - ${table.padEnd(16)} ${details}`);
}

// ---------- données ----------

const ADMINS = [
  { email: 'admin1@example.com', name: 'Admin One' },
  { email: 'admin2@example.com', name: 'Admin Two' },
  { email: 'admin3@example.com', name: 'Admin Three' },
];

export function buildAdmins(passwordHash: string): Prisma.UserCreateManyInput[] {
  return ADMINS.map((admin) => ({
    email: admin.email,
    password: passwordHash,
    name: admin.name,
    role: Role.ADMIN,
  }));
}

export function buildTestimonials(): Prisma.TestimonialCreateManyInput[] {
  return testimonials.map((t: Testimonial) => stripId(t));
}

export function buildNews(): Prisma.NewsItemCreateManyInput[] {
  return (newsItems as NewsItem[]).map((item) =>
    toDate({
      ...stripId(item),
      // éviter undefined pour les champs NULLables
      coverImage: (item as NewsItem & { coverImage?: string | null }).coverImage ?? null,
    })
  ) as Prisma.NewsItemCreateManyInput[];
}

export function buildJobOffers(): Prisma.JobOfferCreateManyInput[] {
  return (jobOffers as JobOffer[]).map((offer) => {
    const base = toDate(stripId(offer));

    return {
      ...base,
      // obligatoires (sécurité)
      slug: offer.slug,
      title: offer.title,
      location: offer.location,
      contractType: offer.contractType,
      description: offer.description ?? '',

      // structures
      equipments: offer.equipments ?? [], // si Prisma = String[]
      sections: offer.sections ?? null, // si Prisma = Json?
    };
  }) as Prisma.JobOfferCreateManyInput[];
}

/** Cinq créneaux d'une heure (9h–14h, heure de Paris) pour le lendemain. */
export function buildDemoSlots(): Prisma.ReservationSlotCreateManyInput[] {
  const [y, m, d] = parisDateKey(new Date()).split('-').map(Number);
  const tomorrowKey = parisDateKey(new Date(Date.UTC(y, m - 1, d + 1))); // YYYY-MM-DD stable en Paris

  return Array.from({ length: 5 }).map((_, i) => ({
    startAt: fromZonedTime(`${tomorrowKey}T${pad2(9 + i)}:00`, TZ), // => Date UTC correcte
    endAt: fromZonedTime(`${tomorrowKey}T${pad2(10 + i)}:00`, TZ),
    status: 'AVAILABLE' as const,
  }));
}

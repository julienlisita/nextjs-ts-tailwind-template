// src/services/testimonials.ts

import 'server-only';
import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from '@/lib/prisma';
import type { Testimonial } from '@/types/testimonial';
import type { Prisma } from '@prisma/client';

function toNumberOr<T extends number | Prisma.Decimal | null | undefined>(
  v: T,
  fallback?: number
): number | undefined {
  if (v == null) return fallback;
  return typeof v === 'number' ? v : v.toNumber();
}

const isVariant = (v: unknown): v is NonNullable<Testimonial['variant']> =>
  v === 'default' || v === 'compact' || v === 'horizontal';

export async function getPublicTestimonials(): Promise<Testimonial[]> {
  noStore();
  const rows = await prisma.testimonial.findMany({
    where: { isPublished: true },
    orderBy: [{ publishedAt: 'desc' }, { id: 'desc' }],
  });

  return rows.map(
    (r): Testimonial => ({
      id: r.id,
      name: r.name,
      role: r.role ?? undefined,
      company: r.company ?? undefined,
      quote: r.quote,
      rating: toNumberOr(r.rating, 5), // <- conversion Decimal -> number
      avatarUrl: r.avatarUrl ?? undefined,
      date: r.displayDate ?? undefined,
      highlight: r.highlight ?? false,
      variant: isVariant(r.variant) ? r.variant : 'default',
      isPublished: r.isPublished ?? true,
      publishedAt: r.publishedAt?.toISOString(),
    })
  );
}

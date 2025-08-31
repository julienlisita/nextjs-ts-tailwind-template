// src/services/news.ts
import 'server-only';
import { unstable_noStore as noStore } from 'next/cache';
import { prisma } from '@/lib/prisma';
import type { NewsItem } from '@/types/news';

export async function getPublicNews(): Promise<NewsItem[]> {
  noStore();

  const rows = await prisma.newsItem.findMany({
    where: { isPublished: true },
    orderBy: [{ publishedAt: 'desc' }, { id: 'desc' }],
  });

  return rows.map(
    (r): NewsItem => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      description: r.description,
      source: r.source ?? undefined,
      url: r.url ?? undefined,
      date: r.displayDate ?? undefined, // libellé affiché (ex: "5 août 2025")
      publishedAt: r.publishedAt?.toISOString(), // ISO pour le tri côté UI si besoin
      isPublished: r.isPublished ?? true,
      coverImage: r.coverImage ?? undefined,
    })
  );
}

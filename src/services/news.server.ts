// src/services/news.server.ts

import 'server-only';
import { IS_DB } from '@/config/dataMode';
import type { NewsItem } from '@/types/news';
import { newsItems } from '@/data/news';

export async function getPublicNewsServer(): Promise<ReadonlyArray<NewsItem>> {
  if (!IS_DB) return newsItems;

  // Import conditionnel pour éviter de bundler Prisma en mode static/edge
  const { getPublicNews } = await import('@/services/news');
  return getPublicNews(); // déjà server-only + noStore()
}
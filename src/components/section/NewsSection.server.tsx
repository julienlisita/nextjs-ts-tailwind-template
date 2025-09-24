// src/components/sections/NewsSection.server.tsx

import NewsSection from './NewsSection';
import { getPublicNewsServer } from '@/server/services/news.server'; // ou '@/server/services/news.server'

export default async function NewsSectionServer() {
  const onlyPublished = true;

  const items = await getPublicNewsServer();
  const filtered = onlyPublished ? items.filter((n) => n.isPublished !== false) : items;

  return <NewsSection items={filtered} />;
}

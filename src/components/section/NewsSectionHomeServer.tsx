// src/components/section/NewsSectionHomeServer.tsx

import NewsSectionHome from './NewsSectionHome';
import { getPublicNewsServer } from '@/server/services/news.server';

export default async function NewsSectionHomeServer() {
  const LIMIT = 4;
  const onlyPublished = true;

  const all = await getPublicNewsServer();

  let filtered = onlyPublished ? all.filter((n) => n.isPublished) : all;
  if (filtered.length === 0) filtered = all;

  const items = filtered.slice(0, LIMIT);

  return <NewsSectionHome items={items} />;
}

// src/components/sections/NewsSection.server.tsx

import NewsSection from './NewsSection';
import { getPublicNewsServer } from '@/server/services/news.server'; // ou '@/server/services/news.server'

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  limit?: number;
  onlyPublished?: boolean; // au cas où tu veux filtrer ici
  className?: string;
  container?: boolean;
};

export default async function NewsSectionServer({
  eyebrow,
  title,
  subtitle,
  limit,
  onlyPublished = true,
  className,
  container = false,
}: Props) {
  const items = await getPublicNewsServer();
  const filtered = onlyPublished ? items.filter((n) => n.isPublished !== false) : items;

  const content = (
    <NewsSection
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      items={filtered}
      limit={limit}
      className={className}
    />
  );

  return container ? <div className="container mx-auto px-4">{content}</div> : content;
}

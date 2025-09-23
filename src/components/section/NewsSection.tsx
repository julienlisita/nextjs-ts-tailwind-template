// src/components/sections/NewsSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import NewsCard from '@/components/widgets/NewsCard';
import type { NewsItem } from '@/types/news';

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: ReadonlyArray<NewsItem>;
  limit?: number;
  className?: string;
};

export default function NewsSection({ eyebrow, title, subtitle, items, limit, className }: Props) {
  const list = typeof limit === 'number' ? items.slice(0, Math.max(0, limit)) : items;
  if (!list.length) return null;

  return (
    <FeaturesGrid<NewsItem>
      eyebrow={eyebrow ?? 'Articles récents'}
      title={title}
      subtitle={subtitle}
      titleAlign="left"
      items={list}
      className={className}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
      pageSize={6}
      renderItem={(item) => (
        <NewsCard
          key={item.id ?? item.slug}
          title={item.title}
          description={item.description}
          displayDate={item.displayDate}
          source={item.source}
          url={item.url}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt ?? item.title}
        />
      )}
      getKey={(item) => item.id ?? item.slug}
    />
  );
}

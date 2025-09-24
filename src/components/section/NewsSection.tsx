// src/components/sections/NewsSection.tsx

'use client';

import FeaturesGrid from './FeaturesGrid';
import NewsCard from '@/components/widgets/NewsCard';
import type { NewsItem } from '@/types/news';

type Props = { items: ReadonlyArray<NewsItem> };

export default function NewsSection({ items }: Props) {
  return (
    <FeaturesGrid<NewsItem>
      eyebrow={'Articles récents'}
      align="left"
      items={items}
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

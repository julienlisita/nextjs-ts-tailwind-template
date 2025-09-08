// src/components/sections/NewsSection.tsx

import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import NewsCard from '@/components/widgets/NewsCard';
import type { NewsItem } from '@/types/news';

type Props = {
  title?: string;
  items: ReadonlyArray<NewsItem>;
  limit?: number;
  className?: string;
};

export default function NewsSection({
  title = 'Articles récents',
  items,
  limit,
  className,
}: Props) {
  const list = typeof limit === 'number' ? items.slice(0, Math.max(0, limit)) : items;
  if (!list.length) return null;

  return (
    <Section className={className}>
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        <div className="flex flex-col items-center gap-6">
          {list.map((item) => (
            <NewsCard
              key={item.id ?? item.slug}
              title={item.title}
              description={item.description}
              displayDate={item.displayDate}
              source={item.source}
              url={item.url}
            />
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}

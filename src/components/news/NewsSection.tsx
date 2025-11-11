// src/components/news/NewsSection.tsx

'use client';

import type { NewsItem } from '@/types/news';
import FeaturesGrid from '../patterns/FeaturesGrid';
import NewsCard from '../data-display/NewsCard';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

type Props = { items: ReadonlyArray<NewsItem> };

export default function NewsSection({ items }: Props) {
  return (
    <Section bgColor="#A8D5BA15">
      <SectionWrapper>
        <HeaderBlock eyebrow="Articles récents" align="center" />

        <FeaturesGrid
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
      </SectionWrapper>
    </Section>
  );
}

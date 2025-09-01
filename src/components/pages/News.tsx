// src/components/pages/News.tsx

import PageTitle from '@/components/ui/PageTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/common/Section';
import NewsCard from '@/components/widgets/NewsCard';
import SectionWrapper from '../common/SectionWrapper';
import { PAGE_DYNAMIC, PAGE_RUNTIME, PAGE_REVALIDATE } from '@/config/dataMode';
import { getPublicNewsServer } from '@/server/services/news.server';

export const runtime = PAGE_RUNTIME;
export const dynamic = PAGE_DYNAMIC;
export const revalidate = PAGE_REVALIDATE;

export default async function News() {
  const newsItems = await getPublicNewsServer();

  return (
    <div className="py-8 sm:py-10 md:py-14 lg:py-20">
      <PageTitle>Actualités</PageTitle>
      <Section>
        <SectionWrapper>
          <SectionTitle>Articles récents</SectionTitle>
          <div className="flex flex-col items-center gap-6">
            {newsItems.map((item, index) => (
              <NewsCard
                key={index}
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
    </div>
  );
}

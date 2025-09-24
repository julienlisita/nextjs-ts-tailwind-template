// src/components/section/NewsSectionHome.tsx

'use client';

import type { NewsItem } from '@/types/news';
import NewsCard from '@/components/widgets/NewsCard';
import Section from '@/components/common/Section';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

type Props = { items: ReadonlyArray<NewsItem> };

export default function NewsSectionHome({ items }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Colonne gauche */}
          <div className="flex flex-col items-center justify-start text-center lg:text-left lg:items-start space-y-4">
            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-600">
              À la une
            </span>
            <SectionTitle align="left">Actualités récentes</SectionTitle>
            <p className="text-base text-gray-700">Les dernières infos utiles pour vous.</p>
            <div className="mt-6">
              <Button href="/news" variant="primary">
                Voir toutes les actualités
              </Button>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col gap-6">
            {items.map((n) => (
              <NewsCard
                key={n.id ?? n.slug}
                title={n.title}
                description={n.description}
                displayDate={n.displayDate}
                source={n.source}
                url={n.url}
                imageUrl={n.imageUrl}
                imageAlt={n.imageAlt ?? n.title}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Section>
  );
}

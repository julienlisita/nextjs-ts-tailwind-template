// src/pages/News.tsx

import type { GetServerSideProps } from 'next';
import type { NewsItem } from '@/types/news';

import PageHero from '@/components/patterns/PageHero';
import NewsSection from '@/components/news/NewsSection';
import Cta from '@/components/patterns/Cta';
import { Newspaper } from 'lucide-react';

import { getPublicNewsServer } from '@/server/services/news.server';

type NewsPageProps = {
  items: ReadonlyArray<NewsItem>;
  errorMessage?: string | null;
};

export const getServerSideProps: GetServerSideProps<NewsPageProps> = async () => {
  try {
    const onlyPublished = true;

    const items = await getPublicNewsServer();
    const filtered = onlyPublished ? items.filter((n) => n.isPublished !== false) : items;

    return {
      props: {
        items: JSON.parse(JSON.stringify(filtered)), // Prisma-safe
      },
    };
  } catch (error) {
    return {
      props: {
        items: [],
        errorMessage: 'Impossible de charger les actualités pour le moment.',
      },
    };
  }
};

export default function NewsPageView({ items, errorMessage }: NewsPageProps) {
  return (
    <div>
      <PageHero
        icon={<Newspaper size={40} />}
        title="Actualités"
        subtitle="Articles, informations et mises à jour : retrouvez ici nos dernières publications."
        align="center"
      />

      {errorMessage && (
        <div className="max-w-3xl mx-auto px-4 mt-6 text-sm text-orange-200">{errorMessage}</div>
      )}

      <NewsSection items={items} />

      <Cta
        title="Une question suite à un article ?"
        description="Contactez-nous : nous vous répondrons rapidement et avec clarté."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}

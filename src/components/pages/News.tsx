// src/components/pages/News.tsx

'use client';

import PageTitle from '@/components/ui/PageTitle';
import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/common/Section';
import NewsCard from '@/components/widgets/NewsCard';
import SectionWrapper from '../common/SectionWrapper';

export default function News() {

  const newsItems = [
  {
    title: "Aide à domicile : les nouveaux dispositifs d'accompagnement",
    description: "Un article sur les évolutions récentes concernant l’aide à domicile en France.",
    date: "5 août 2025",
    source: "Service-public.fr",
    url: "https://www.service-public.fr/particuliers/actualites/A17123",
  },
  {
    title: "Revalorisation du métier d’auxiliaire de vie",
    description: "Zoom sur les nouvelles mesures pour améliorer les conditions de travail dans le secteur.",
    date: "28 juillet 2025",
    source: "Santé Magazine",
    url: "https://www.santemagazine.fr/actualites/auxiliaires-de-vie-revalorisation-emploi",
  },
  {
    title: "CCS en action : retour sur notre intervention à Angoulême",
    description: "Découvrez notre dernier accompagnement personnalisé dans le cadre d’une aide à domicile renforcée.",
    date: "20 juillet 2025",
    source: "Company Care Service",
    url: "https://www.exemple.com/actualites/intervention-angouleme",
  },
];


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
                date={item.date}
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

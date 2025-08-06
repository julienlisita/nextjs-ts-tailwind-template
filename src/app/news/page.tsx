// src/app/news/page.tsx

import News from '@/components/pages/News';

export const metadata = {
  title: 'Actualités',
  description:
    'Actualités ou publications de l’entreprise. Cette page peut contenir des articles internes, des liens externes, ou évoluer vers un blog complet.',
  alternates: {
    canonical: 'https://www.exemple.com/news',
  },
};

export default function NewsPage() {
  return <News />;
}

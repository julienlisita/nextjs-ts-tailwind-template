import SectionWrapper from '../common/SectionWrapper';
import NewsSectionHome from './NewsSectionHome';
import { getPublicNewsServer } from '@/server/services/news.server';

type Props = {
  limit?: number; // ex: 4 pour 2x2
  onlyPublished?: boolean; // filtre les actus publiées
  container?: boolean; // wrapper optionnel
};

export default async function NewsSectionHomeServer({
  limit = 4,
  onlyPublished = true,
  container = false,
}: Props) {
  const all = await getPublicNewsServer();

  // filtre "publiées" + fallback si vide
  let filtered = onlyPublished ? all.filter((n) => n.isPublished) : all;
  if (filtered.length === 0) filtered = all;

  const items = filtered.slice(0, limit);

  const content = <NewsSectionHome items={items} />;
  return container ? <SectionWrapper>{content}</SectionWrapper> : content;
}

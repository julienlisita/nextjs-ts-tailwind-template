// src/app/admin/news/page.tsx

import NewsAdminScreen from '@/screens/admin/NewsAdminScreen';
import { listNews } from '@/server/services/news.service';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Administration – Actualités' };

export default async function NewsAdminPage() {
  const items = await listNews();
  return <NewsAdminScreen items={items} />;
}

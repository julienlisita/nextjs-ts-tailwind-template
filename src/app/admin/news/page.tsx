// src/app/admin/news/page.tsx

import NewsAdminScreen from '@/screens/admin/NewsAdminScreen';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Administration – Actualités' };

export default function NewsAdminPage() {
  return <NewsAdminScreen />;
}

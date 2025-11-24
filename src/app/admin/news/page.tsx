// src/app/admin/news/page.tsx

import NewsAdmin from '@/components/pages/admin/NewsAdmin';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Administration – Actualités' };

export default function NewsAdminPage() {
  return <NewsAdmin />;
}

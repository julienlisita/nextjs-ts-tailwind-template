// src/app/(admin)/admin/offres/layout.tsx

import { requireAdmin } from '@/server/guards/requireAdmin';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return <>{children}</>;
}

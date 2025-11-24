// src/app/admin/settings/layout.tsx

import { requireAuth } from '@/server/guards/requireAuth';

export default async function SettingsLayout({ children }: { children: React.ReactNode }) {
  await requireAuth(); // Next 15: requireAuth est async
  return <>{children}</>;
}

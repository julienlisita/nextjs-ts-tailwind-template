// src/app/admin/settings/page.tsx

import SettingsAdmin from '@/components/pages/admin/SettingsAdmin';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Administration – Paramètres du compte',
  description: 'Gérez votre profil administrateur et votre mot de passe.',
};

export default function SettingsAdminPage() {
  return <SettingsAdmin />;
}

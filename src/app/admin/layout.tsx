// src/app/admin/layout.tsx

export const dynamic = 'force-dynamic';

import type { ReactNode } from 'react';

import { logoutAction } from '@/app/(auth)/actions';
import { requireAdmin } from '@/server/guards/requireAdmin';
import AdminNav from '@/components/admin/AdminNav';

type Props = {
  children: ReactNode;
};

export default async function AdminLayout({ children }: Props) {
  const user = await requireAdmin(); // protège tout le segment /admin

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header admin */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Espace administrateur
            </p>
            <h1 className="text-sm font-semibold">Back-office</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">
                {user?.userId && <span>Admin #{user.userId}</span>}
              </p>
              {/* si tu veux rajouter l'email, il faudrait enrichir requireAdmin avec l'email, pour l'instant on ne l’a pas */}
            </div>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-xs px-3 py-1.5 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              >
                Se déconnecter
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex gap-8">
        <aside className="w-56 shrink-0">
          <AdminNav />
        </aside>

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}

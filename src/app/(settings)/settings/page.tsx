// src/app/(settings)/page.tsx

import { logoutAction } from '@/app/(auth)/actions';
import { changePasswordAction } from './actions';

export default function SettingsPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Paramètres</h1>

      <form action={changePasswordAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Mot de passe actuel</label>
          <input
            type="password"
            name="currentPassword"
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nouveau mot de passe</label>
          <input
            type="password"
            name="newPassword"
            required
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Changer le mot de passe
        </button>
      </form>

      <form action={logoutAction}>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Se déconnecter
        </button>
      </form>
    </div>
  );
}

// src/app/admin/settings/page.tsx

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

        <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700">
          Changer le mot de passe
        </button>
      </form>
    </div>
  );
}

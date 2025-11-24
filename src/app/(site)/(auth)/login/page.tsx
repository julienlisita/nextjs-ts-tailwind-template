// src/app/(site)/(auth)/login/page.tsx

import { loginAction } from './actions';

export default function LoginPage() {
  return (
    <form action={loginAction} className="space-y-4 max-w-sm">
      <input name="email" type="email" placeholder="Email" required className="border p-2 w-full" />
      <input
        name="password"
        type="password"
        placeholder="Mot de passe"
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="border p-2">
        Se connecter
      </button>
    </form>
  );
}

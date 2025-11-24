// src/components/pages/Login.tsx

import { Lock } from 'lucide-react';
import PageHero from '@/components/patterns/PageHero';
import FloatingInput from '@/components/form/FloatingInput';
import Button from '@/components/ui/Button';
import { loginAction } from '@/app/(site)/(auth)/login/actions';

type LoginProps = {
  errorKey?: string;
};

export default function Login({ errorKey }: LoginProps) {
  let errorMessage: string | null = null;

  if (errorKey === 'invalid-credentials') {
    errorMessage = 'Email ou mot de passe incorrect.';
  } else if (errorKey === 'unknown') {
    errorMessage = "Une erreur s'est produite. Veuillez réessayer.";
  }
  return (
    <div>
      <PageHero
        icon={<Lock size={40} />}
        title="Espace administrateur"
        subtitle="Connectez-vous pour accéder au back-office et gérer le contenu du site."
        align="center"
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sm:p-8">
          <h2 className="text-lg font-semibold mb-2 text-center">Connexion admin</h2>
          <p className="text-sm text-neutral-600 mb-6 text-center">
            Cet espace est réservé aux administrateurs du site.
          </p>

          {errorMessage && (
            <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <form action={loginAction} className="space-y-4">
            <FloatingInput label="Email" name="email" type="email" autoComplete="email" required />

            <FloatingInput
              label="Mot de passe"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />

            <div className="pt-2 text-center">
              <Button type="submit" variant="primary">
                Se connecter
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

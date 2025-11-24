// src/app/(site)/(auth)/login/page.tsx

import Login from '@/components/pages/Login';

export const metadata = {
  title: 'Connexion administrateur – Nom du site',
  description: "Accédez à l'espace administrateur pour gérer le site.",
};

export default function LoginPage() {
  return <Login />;
}

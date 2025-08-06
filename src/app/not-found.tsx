import PageTitle from '@/components/ui/PageTitle';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-8">
      <PageTitle>Page non trouvée</PageTitle>
      <p className="text-gray-600 mb-6 mt-4">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <a href="/" className="text-blue-600 hover:underline">
        Retour à l’accueil
      </a>
    </main>
  );
}

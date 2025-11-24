// src/app/admin/page.tsx

export const dynamic = 'force-dynamic';

import Link from 'next/link';

const cards = [
  {
    href: '/admin/reservations',
    title: 'Réservations',
    description: 'Consulter et annuler les réservations à venir.',
  },
  {
    href: '/admin/slots',
    title: 'Créneaux',
    description: 'Gérer les créneaux disponibles, les activer ou les désactiver.',
  },
  {
    href: '/admin/news',
    title: 'Actualités',
    description: 'Ajouter ou mettre à jour les articles d’actualités.',
  },
  {
    href: '/admin/offers',
    title: 'Offres d’emploi',
    description: 'Gérer les offres proposées sur le site.',
  },
  {
    href: '/admin/settings',
    title: 'Paramètres',
    description: 'Modifier votre mot de passe et gérer votre compte admin.',
  },
];

export default function AdminHomePage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold mb-1">Tableau de bord</h1>
        <p className="text-sm text-neutral-600">
          Accédez rapidement aux principales sections d’administration du site.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="block rounded-lg border border-neutral-200 bg-white p-4 hover:border-slate-400 hover:shadow-sm transition"
          >
            <h2 className="text-sm font-semibold mb-1">{card.title}</h2>
            <p className="text-xs text-neutral-600">{card.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

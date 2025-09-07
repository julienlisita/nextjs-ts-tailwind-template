// src/components/pages/admin/NewsAdmin.tsx

import { listNews } from '@/server/services/news.service';
import { upsertNewsAction, deleteNewsAction } from '@/app/admin/news/actions';
import { SubmitButton } from '@/components/ui/SubmitButton';

export const dynamic = 'force-dynamic';

export default async function NewsAdmin() {
  const items = await listNews();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Actualités</h1>

      {/* Création */}
      <section className="rounded-xl border p-4 space-y-4">
        <h2 className="text-lg font-semibold">Créer une actualité</h2>
        <form action={upsertNewsAction} className="grid gap-3">
          <input name="slug" placeholder="slug-exemple" required className="border rounded p-2" />
          <input name="title" placeholder="Titre" required className="border rounded p-2" />
          <input name="source" placeholder="Source (optionnel)" className="border rounded p-2" />
          <input name="url" placeholder="Lien source (optionnel)" className="border rounded p-2" />
          <input
            name="displayDate"
            placeholder="Affiché (ex: 5 août 2025)"
            className="border rounded p-2"
          />
          <input
            name="coverImage"
            placeholder="Cover URL (optionnel)"
            className="border rounded p-2"
          />
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" name="isPublished" />
            Publier
          </label>
          <textarea
            name="description"
            placeholder="Description"
            required
            className="border rounded p-2"
            rows={4}
          />
          <SubmitButton>Créer</SubmitButton>
        </form>
      </section>

      {/* Liste */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Liste des actualités</h2>
        <ul className="space-y-3">
          {items.map((n) => (
            <li key={n.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">{n.title}</div>
                  <div className="text-xs text-gray-500">
                    {n.slug} · {n.displayDate ?? '—'} · {n.isPublished ? 'Publié' : 'Brouillon'}
                  </div>
                  <p className="mt-2 text-sm whitespace-pre-line">{n.description}</p>
                </div>

                {/* Suppression */}
                <form action={deleteNewsAction}>
                  <input type="hidden" name="id" value={n.id} />
                  <SubmitButton>Supprimer</SubmitButton>
                </form>
              </div>

              {/* Edition inline */}
              <details className="mt-3">
                <summary className="cursor-pointer text-sm text-blue-700">Modifier</summary>
                <form action={upsertNewsAction} className="mt-3 grid gap-3">
                  <input type="hidden" name="id" value={n.id} />
                  <input name="slug" defaultValue={n.slug} className="border rounded p-2" />
                  <input name="title" defaultValue={n.title} className="border rounded p-2" />
                  <input
                    name="source"
                    defaultValue={n.source ?? ''}
                    className="border rounded p-2"
                  />
                  <input name="url" defaultValue={n.url ?? ''} className="border rounded p-2" />
                  <input
                    name="displayDate"
                    defaultValue={n.displayDate ?? ''}
                    className="border rounded p-2"
                  />
                  <input
                    name="coverImage"
                    defaultValue={n.coverImage ?? ''}
                    className="border rounded p-2"
                  />
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" name="isPublished" defaultChecked={n.isPublished} />
                    Publier
                  </label>
                  <textarea
                    name="description"
                    defaultValue={n.description}
                    className="border rounded p-2"
                    rows={4}
                  />
                  <SubmitButton>Enregistrer</SubmitButton>
                </form>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

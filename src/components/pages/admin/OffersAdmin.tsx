import { listJobOffers } from '@/server/services/job-offer.service';
import { upsertJobOfferAction, deleteJobOfferAction } from '@/app/admin/offers/actions';
import { SubmitButton } from '@/components/ui/SubmitButton';

export const dynamic = 'force-dynamic'; // éviter le cache côté admin

export default async function OffersAdmin() {
  const offers = await listJobOffers();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Offres d’emploi</h1>

      {/* Création */}
      <section className="rounded-xl border p-4 space-y-4">
        <h2 className="text-lg font-semibold">Créer une offre</h2>
        <form action={upsertJobOfferAction} className="grid gap-3">
          <input name="title" placeholder="Titre" required className="border rounded p-2" />
          <input
            name="location"
            placeholder="Localisation"
            required
            className="border rounded p-2"
          />
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
        <h2 className="text-lg font-semibold">Liste des offres</h2>
        <ul className="space-y-3">
          {offers.map((o) => (
            <li key={o.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-sm text-gray-500">{o.location}</div>
                  <p className="mt-2 text-sm whitespace-pre-line">{o.description}</p>
                </div>

                {/* Suppression */}
                <form action={deleteJobOfferAction}>
                  <input type="hidden" name="id" value={o.id} />
                  <SubmitButton>Supprimer</SubmitButton>
                </form>
              </div>

              {/* Edition inline */}
              <details className="mt-3">
                <summary className="cursor-pointer text-sm text-blue-700">Modifier</summary>
                <form action={upsertJobOfferAction} className="mt-3 grid gap-3">
                  <input type="hidden" name="id" value={o.id} />
                  <input name="title" defaultValue={o.title} className="border rounded p-2" />
                  <input name="location" defaultValue={o.location} className="border rounded p-2" />
                  <textarea
                    name="description"
                    defaultValue={o.description}
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

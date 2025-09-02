// src/app/(admin)/admin/offres/actions.ts

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import {
  createJobOffer,
  updateJobOffer,
  deleteJobOffer,
} from '@/server/services/job-offer.service';

const upsertSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(2, 'Titre trop court'),
  location: z.string().min(2, 'Localisation requise'),
  description: z.string().min(5, 'Description trop courte'),
});

export async function upsertJobOfferAction(formData: FormData) {
  const parsed = upsertSchema.parse({
    id: formData.get('id') ?? undefined,
    title: formData.get('title'),
    location: formData.get('location'),
    description: formData.get('description'),
  });

  if (parsed.id) {
    await updateJobOffer(parsed.id, {
      title: parsed.title,
      location: parsed.location,
      description: parsed.description,
    });
  } else {
    await createJobOffer({
      title: parsed.title,
      location: parsed.location,
      description: parsed.description,
    });
  }

  revalidatePath('/admin/offres');
}

export async function deleteJobOfferAction(formData: FormData) {
  const id = Number(formData.get('id'));
  if (!Number.isFinite(id)) throw new Error('INVALID_ID');

  await deleteJobOffer(id);
  revalidatePath('/admin/offres');
}

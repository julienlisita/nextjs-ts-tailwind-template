// src/app/reservations/actions.ts

'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { createReservationFromPublicSafe } from '@/server/services/reservations.service';

const schema = z.object({
  // honeypot
  website: z.string().max(0).optional(),

  slotId: z.coerce.number().int().positive('Créneau invalide'),
  civilite: z.string().optional(),
  prenom: z.string().min(2, 'Prénom trop court'),
  nom: z.string().min(2, 'Nom trop court'),
  email: z.string().email('Email invalide'),
  telephone: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v ? v : undefined)),
  message: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v ? v : undefined)),
});

export async function sendReservation(formData: FormData) {
  const parsed = schema.safeParse({
    website: formData.get('website'),
    slotId: formData.get('slotId'),
    civilite: formData.get('civilite'),
    prenom: formData.get('prenom'),
    nom: formData.get('nom'),
    email: formData.get('email'),
    telephone: formData.get('telephone'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    console.error('[sendReservation] validation error', parsed.error.flatten());
    redirect('/reservations/erreur');
  }

  const v = parsed.data;

  // honeypot → bot, on ignore
  if (v.website) {
    return;
  }

  const fullName = v.civilite ? `${v.civilite} ${v.prenom} ${v.nom}` : `${v.prenom} ${v.nom}`;

  // appel "safe" du service
  const result = await createReservationFromPublicSafe({
    slotId: v.slotId,
    clientName: fullName,
    clientEmail: v.email,
    clientPhone: v.telephone,
    message: v.message,
  });

  if (!result.ok) {
    if (result.reason === 'slot-unavailable') {
      console.warn('[sendReservation] slot not available anymore', v.slotId);
      // tu peux affiner plus tard (query param, message UI, etc.)
      redirect('/reservations?error=slot-unavailable');
    }

    console.error('[sendReservation] unknown error while creating reservation');
    redirect('/reservations/erreur');
  }

  redirect('/reservations/merci');
}

// src/app/reservations/actions.ts

'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { createReservationFromPublic } from '@/server/services/reservations.service';

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
    // pour rester simple : log + redirection
    console.error('[sendReservation] validation error', parsed.error.flatten());
    redirect('/reservations/erreur'); // ou reste sur la même page si tu veux gérer plus finement
  }

  const v = parsed.data;

  // honeypot → bot, on ignore
  if (v.website) {
    return;
  }

  const fullName = v.civilite ? `${v.civilite} ${v.prenom} ${v.nom}` : `${v.prenom} ${v.nom}`;

  await createReservationFromPublic({
    slotId: v.slotId,
    clientName: fullName,
    clientEmail: v.email,
    clientPhone: v.telephone,
    message: v.message,
  });

  redirect('/reservations/merci');
}

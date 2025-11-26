// src/app/(site)/reservations/actions.ts

'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import {
  createReservationFromPublicSafe,
  getSlotById,
} from '@/server/services/reservations.service';
import {
  sendReservationAdminEmail,
  sendReservationConfirmationEmail,
} from '@/server/services/reservations.mail';

const schema = z.object({
  // honeypot
  website: z.string().max(0).optional(),

  slotId: z.coerce.number().int().positive('Créneau invalide'),
  civilite: z
    .union([z.string(), z.null(), z.undefined()])
    .transform((v) => (typeof v === 'string' && v.trim() !== '' ? v : undefined)),
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
    return;
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

  // Envoie du mail de confirmation
  try {
    const slot = await getSlotById(v.slotId);

    if (!slot) {
      console.warn(
        '[sendReservation] reservation ok mais slot introuvable au moment de l’email',
        v.slotId
      );
    } else {
      // Mail client
      await sendReservationConfirmationEmail({
        clientEmail: v.email,
        clientName: fullName,
        slotStart: slot.startAt,
        slotEnd: slot.endAt,
      });

      // Mail admin interne
      await sendReservationAdminEmail({
        clientName: fullName,
        clientEmail: v.email,
        clientPhone: v.telephone,
        message: v.message,
        slotStart: slot.startAt,
        slotEnd: slot.endAt,
      });
    }
  } catch (err) {
    console.error('[sendReservation] erreur lors de l’envoi de l’email de confirmation', err);
    // on n’échoue pas la réservation pour autant
  }

  redirect('/reservations/merci');
}

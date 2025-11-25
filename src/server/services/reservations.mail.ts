// src/server/services/reservations.mail.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendReservationConfirmationEmailInput = {
  clientEmail: string;
  clientName: string;
  slotStart: Date;
  slotEnd: Date;
};

export async function sendReservationConfirmationEmail({
  clientEmail,
  clientName,
  slotStart,
  slotEnd,
}: SendReservationConfirmationEmailInput) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[sendReservationConfirmationEmail] RESEND_API_KEY manquant, email non envoyé');
    return;
  }

  const formatter = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  const slotLabel = formatter.formatRange(slotStart, slotEnd);

  await resend.emails.send({
    from: 'Réservations <no-reply@exemple.com>', // adapte au domaine de ton template
    to: clientEmail,
    subject: 'Confirmation de votre réservation',
    html: `
      <p>Bonjour ${clientName},</p>
      <p>Votre réservation a bien été enregistrée.</p>
      <p><strong>Créneau réservé :</strong><br />${slotLabel}</p>
      <p>Si vous devez modifier ou annuler ce créneau, répondez simplement à cet email.</p>
      <p>À bientôt,</p>
      <p>L'équipe du site</p>
    `,
  });
}

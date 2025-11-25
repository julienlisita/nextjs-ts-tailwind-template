// src/server/services/reservations.mail.ts

const brevoApiKey = process.env.BREVO_API_KEY;

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
}: SendReservationConfirmationEmailInput): Promise<boolean> {
  if (!brevoApiKey) {
    console.warn('[sendReservationConfirmationEmail] BREVO_API_KEY manquante, email non envoyé');
    return false;
  }

  const formatter = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  const slotLabel = formatter.formatRange(slotStart, slotEnd);

  const htmlContent = `
    <p>Bonjour ${clientName},</p>
    <p>Votre réservation a bien été enregistrée.</p>
    <p><strong>Créneau réservé :</strong><br />${slotLabel}</p>
    <p>Si vous devez modifier ou annuler ce créneau, répondez simplement à cet email.</p>
    <p>À bientôt,</p>
    <p>L'équipe du site</p>
  `;

  const textContent = `Bonjour ${clientName},

Votre réservation a bien été enregistrée.

Créneau réservé :
${slotLabel}

Si vous devez modifier ou annuler ce créneau, répondez simplement à cet email.

À bientôt,
L'équipe du site
`;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Réservations',
          email: 'no-reply@julienlisita.com',
        },
        to: [
          {
            email: clientEmail,
            name: clientName,
          },
        ],
        subject: 'Confirmation de votre réservation',
        htmlContent,
        textContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.error(
        '[sendReservationConfirmationEmail] Brevo HTTP error',
        response.status,
        errorText
      );
      return false;
    }

    const json = await response.json().catch(() => null);
    console.log('[sendReservationConfirmationEmail] email envoyé via Brevo', json);
    return true;
  } catch (err) {
    console.error('[sendReservationConfirmationEmail] erreur réseau ou Brevo', err);
    return false;
  }
}

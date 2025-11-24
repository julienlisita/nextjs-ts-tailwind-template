// src/app/(site)/contact/actions.ts

'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { redirect } from 'next/navigation';

const schema = z.object({
  civilite: z.string().optional(),
  prenom: z.string().min(1),
  nom: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional(), // honeypot
});

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Site Template <no-reply@resend.dev>';
const TO = 'julien.lisita@gmail.com';

export async function sendContact(formData: FormData): Promise<void> {
  'use server';

  // Vérification du honeypot
  if (formData.get('company')) {
    console.warn('Spam détecté via le champ honeypot');
    redirect('/thank-you');
  }

  // Validation avec Zod
  const data = schema.parse({
    civilite: formData.get('civilite')?.toString(),
    prenom: formData.get('prenom')?.toString(),
    nom: formData.get('nom')?.toString(),
    email: formData.get('email')?.toString(),
    message: formData.get('message')?.toString(),
  });

  const html = `
    <h3>Nouvelle demande de contact</h3>
    <p><strong>Civilité :</strong> ${data.civilite || '—'}</p>
    <p><strong>Nom :</strong> ${data.prenom} ${data.nom}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Message :</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
  `;

  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: 'Nouveau message – Formulaire de contact',
    html,
  });

  redirect('/thank-you');
}

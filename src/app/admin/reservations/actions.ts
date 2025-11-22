// src/app/admin/reservations/actions.ts

'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { cancelReservationAdmin } from '@/server/services/reservations.service';
import { requireAdmin } from '@/server/guards/requireAdmin';

const schema = z.object({
  reservationId: z.coerce.number().int().positive(),
});

export async function cancelReservationAction(formData: FormData) {
  await requireAdmin();

  const parsed = schema.safeParse({
    reservationId: formData.get('reservationId'),
  });

  if (!parsed.success) {
    console.error('[cancelReservationAction] invalid payload', parsed.error.flatten());
    return;
  }

  const { reservationId } = parsed.data;

  try {
    await cancelReservationAdmin(reservationId);
  } catch (err) {
    console.error('[cancelReservationAction] error cancelling reservation', err);
  }

  // On revalide la page admin
  revalidatePath('/admin/reservations');
}

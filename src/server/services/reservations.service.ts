// src/server/services/reservations.service.ts

import { reservationSlotRepo } from '../repositories/reservationSlot.repo';
import { reservationRepo } from '../repositories/reservation.repo';

export const listAvailableSlots = () => reservationSlotRepo.listAvailable();

/**
 * Version "safe" : on ne laisse pas l'erreur remonter,
 * on renvoie un objet de résultat pour que la server action gère proprement.
 */
export async function createReservationFromPublicSafe(
  input: Parameters<typeof reservationRepo.createFromPublic>[0]
): Promise<{ ok: boolean; reason?: 'slot-unavailable' | 'unknown-error' }> {
  try {
    await reservationRepo.createFromPublic(input);
    return { ok: true };
  } catch (err) {
    if (err instanceof Error && err.message === 'Ce créneau n’est plus disponible.') {
      console.warn('[reservations] slot unavailable in createReservationFromPublicSafe', {
        slotId: input.slotId,
      });
      return { ok: false, reason: 'slot-unavailable' };
    }

    console.error('[reservations] unexpected error in createReservationFromPublicSafe', err);
    return { ok: false, reason: 'unknown-error' };
  }
}

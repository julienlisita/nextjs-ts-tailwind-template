// src/server/services/reservations.server.ts

import { IS_DB } from '@/config/dataMode';
import type { ReservationSlot } from '@/generated/prisma/client';

export async function getAvailableSlotsServer(): Promise<ReadonlyArray<ReservationSlot>> {
  if (!IS_DB) {
    // Mode statique éventuel plus tard
    return [];
  }

  const { listAvailableSlots } = await import('@/server/services/reservations.service');
  const slots = await listAvailableSlots();

  return slots;
}

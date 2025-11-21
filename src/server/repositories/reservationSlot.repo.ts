// src/server/repositories/reservationSlot.repo.ts

import { prisma } from '@/lib/prisma';
import type { ReservationSlot, SlotStatus } from '@prisma/client';

export const reservationSlotRepo = {
  listAvailable(): Promise<ReservationSlot[]> {
    return prisma.reservationSlot.findMany({
      where: {
        status: 'AVAILABLE',
        startAt: { gte: new Date() },
      },
      orderBy: { startAt: 'asc' },
    });
  },

  findById(id: number): Promise<ReservationSlot | null> {
    return prisma.reservationSlot.findUnique({ where: { id } });
  },

  updateStatus(id: number, status: SlotStatus): Promise<ReservationSlot> {
    return prisma.reservationSlot.update({
      where: { id },
      data: { status },
    });
  },
};

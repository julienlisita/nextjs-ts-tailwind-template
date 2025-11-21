// src/server/repositories/reservation.repo.ts

import { prisma } from '@/lib/prisma';
import type { Reservation } from '@prisma/client';

export const reservationRepo = {
  async createFromPublic(input: {
    slotId: number;
    clientName: string;
    clientEmail: string;
    clientPhone?: string;
    message?: string;
  }): Promise<Reservation> {
    return prisma.$transaction(async (tx) => {
      const slot = await tx.reservationSlot.findUnique({
        where: { id: input.slotId },
      });

      if (!slot || slot.status !== 'AVAILABLE') {
        throw new Error('Ce créneau n’est plus disponible.');
      }

      const reservation = await tx.reservation.create({
        data: {
          slotId: slot.id,
          clientName: input.clientName,
          clientEmail: input.clientEmail,
          clientPhone: input.clientPhone,
          message: input.message,
        },
      });

      await tx.reservationSlot.update({
        where: { id: slot.id },
        data: { status: 'BOOKED' },
      });

      return reservation;
    });
  },
};

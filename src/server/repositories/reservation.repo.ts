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
      const now = new Date();

      const slot = await tx.reservationSlot.findUnique({
        where: { id: input.slotId },
      });

      // Vérification simple mais complète
      if (!slot || slot.status !== 'AVAILABLE' || slot.startAt < now) {
        console.warn('[reservationRepo.createFromPublic] slot invalid', {
          slotExists: !!slot,
          status: slot?.status,
          startAt: slot?.startAt,
          now,
        });
        throw new Error('Ce créneau n’est plus disponible.');
      }

      // Création de la réservation
      const reservation = await tx.reservation.create({
        data: {
          slotId: slot.id,
          clientName: input.clientName,
          clientEmail: input.clientEmail,
          clientPhone: input.clientPhone,
          message: input.message,
        },
      });

      // Mise à jour du slot
      await tx.reservationSlot.update({
        where: { id: slot.id },
        data: { status: 'BOOKED' },
      });

      return reservation;
    });
  },
};

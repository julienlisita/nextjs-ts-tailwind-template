// src/server/repositories/reservationSlot.repo.ts

import { prisma } from '@/lib/prisma';
import type { Prisma, ReservationSlot, SlotStatus } from '@/generated/prisma/client';

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
  // 🔹 Tous les créneaux pour l’admin
  listAll(): Promise<ReservationSlot[]> {
    return prisma.reservationSlot.findMany({
      orderBy: { startAt: 'asc' },
    });
  },

  // 🔹 Création d’un créneau
  create(data: Prisma.ReservationSlotCreateInput): Promise<ReservationSlot> {
    return prisma.reservationSlot.create({ data });
  },

  // 🔹 Suppression d’un créneau sans réservation
  async deleteIfNoReservation(id: number): Promise<boolean> {
    const existing = await prisma.reservation.findFirst({
      where: { slotId: id },
    });

    if (existing) {
      return false; // il y a déjà une réservation, on ne supprime pas
    }

    await prisma.reservationSlot.delete({ where: { id } });
    return true;
  },
};

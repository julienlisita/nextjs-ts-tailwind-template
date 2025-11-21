// src/server/services/reservations.service.ts

import { reservationSlotRepo } from '../repositories/reservationSlot.repo';
import { reservationRepo } from '../repositories/reservation.repo';

export const listAvailableSlots = () => reservationSlotRepo.listAvailable();

export const createReservationFromPublic = (
  input: Parameters<typeof reservationRepo.createFromPublic>[0]
) => reservationRepo.createFromPublic(input);

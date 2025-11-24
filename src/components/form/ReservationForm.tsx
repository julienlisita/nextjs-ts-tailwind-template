// src/components/form/ReservationForm.tsx

'use client';

import Button from '../ui/Button';
import FloatingInput from '../form/FloatingInput';
import FloatingTextarea from '../form/FloatingTextarea';
import { sendReservation } from '@/app/(site)/reservations/actions';
import type { ReservationSlot } from '@prisma/client';
import './ReservationForm.css';
import Radio from './Radio';
import Select from './Select';

type ReservationFormProps = {
  slots: ReadonlyArray<ReservationSlot>;
  ctaAlign?: 'left' | 'center' | 'right';
  className?: string;
};

export default function ReservationForm({
  slots,
  ctaAlign = 'left',
  className,
}: ReservationFormProps) {
  const alignClass =
    ctaAlign === 'center'
      ? 'text-center lg:text-center'
      : ctaAlign === 'right'
        ? 'text-center lg:text-right'
        : 'text-center lg:text-left';

  const formatSlot = (slot: ReservationSlot) => {
    const start = new Date(slot.startAt);
    const end = new Date(slot.endAt);

    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    }).formatRange(start, end);
  };

  return (
    <form
      name="reservation"
      action={sendReservation}
      className={`reservation-form ${className ?? ''}`}
    >
      {/* Honeypot */}
      <input
        type="text"
        hidden
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Civilité */}
      <div className="mb-4">
        <span className="block mb-2 font-medium">Civilité</span>
        <div className="flex flex-wrap gap-6">
          <Radio name="civilite" value="Mme" label="Mme" />
          <Radio name="civilite" value="M." label="M." />
        </div>
      </div>

      {/* Créneau souhaité */}
      <div className="mb-4">
        <Select
          label="Créneau souhaité"
          name="slotId"
          required
          defaultValue={-1}
          options={[
            { value: -1, label: 'Sélectionnez un créneau', disabled: true },
            ...slots.map((slot) => ({
              value: slot.id,
              label: formatSlot(slot),
            })),
          ]}
        />

        {slots.length === 0 && (
          <p className="mt-2 text-sm text-neutral-600">Aucun créneau disponible pour le moment.</p>
        )}
      </div>

      {/* Prénom / Nom */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FloatingInput label="Prénom" name="prenom" type="text" required />
        <FloatingInput label="Nom" name="nom" type="text" required />
      </div>

      <FloatingInput label="Email" name="email" type="email" required />
      <FloatingInput label="Téléphone" name="telephone" type="tel" />

      <FloatingTextarea
        label="Message (optionnel)"
        name="message"
        placeholder="Précisez votre objectif, vos disponibilités ou votre niveau actuel."
      />

      <div className={alignClass}>
        <Button type="submit" variant="primary" disabled={slots.length === 0}>
          {slots.length === 0 ? 'Aucun créneau disponible' : 'Envoyer la réservation'}
        </Button>
      </div>
    </form>
  );
}

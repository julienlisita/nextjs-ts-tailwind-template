'use client';

import { useState, useTransition } from 'react';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import Button from '../ui/Button';
import { sendApplication } from '@/app/recruitment/actions';
import './JobApplicationForm.css';
import Radio from './Radio';

type JobApplicationFormProps = {
  jobTitle: string;
  /** Alignement du bouton CTA (appliqué à partir de lg) */
  ctaAlign?: 'left' | 'center' | 'right';
  className?: string;
};

export default function JobApplicationForm({
  jobTitle,
  ctaAlign = 'left',
  className,
}: JobApplicationFormProps) {
  const [fileName, setFileName] = useState('');
  const [isPending, startTransition] = useTransition();

  const alignClass =
    ctaAlign === 'center'
      ? 'text-center lg:text-center'
      : ctaAlign === 'right'
        ? 'text-center lg:text-right'
        : 'text-center lg:text-left';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const onAction = (formData: FormData) => {
    startTransition(async () => {
      await sendApplication(jobTitle, formData);
    });
  };

  return (
    <form name="job-application" action={onAction} className={`job-form ${className ?? ''}`}>
      <h2 className="job-form-title">Postuler à : {jobTitle}</h2>

      {/* honeypot anti-spam */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Civilité */}
      <div className="mb-4">
        <span className="block mb-2 font-medium text-[var(--color-dark)]">Civilité</span>
        <div className="flex flex-wrap gap-6">
          <Radio name="civilite" value="Mme" label="Mme" />
          <Radio name="civilite" value="M." label="M." />
        </div>
      </div>

      {/* Prénom / Nom */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FloatingInput label="Prénom" name="prenom" type="text" required />
        <FloatingInput label="Nom" name="nom" type="text" required />
      </div>

      {/* Email */}
      <FloatingInput label="Email" name="email" type="email" required />

      {/* Message */}
      <FloatingTextarea label="Message" name="message" required />

      {/* Upload CV */}
      <div className="file-upload mt-4">
        <label htmlFor="cv" className="file-label">
          Joindre un CV (PDF, DOC, DOCX)
        </label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="file-input"
        />
        {fileName && <p className="file-name">Fichier sélectionné : {fileName}</p>}
      </div>

      {/* CTA */}
      <div className={`${alignClass} mt-6`}>
        <Button type="submit" variant="primary" disabled={isPending}>
          {isPending ? 'Envoi en cours…' : 'Envoyer la candidature'}
        </Button>
      </div>
    </form>
  );
}

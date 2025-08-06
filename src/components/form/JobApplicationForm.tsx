// src/components/form/JobApplicationForm.tsx

'use client';

import { useState } from 'react';
import FloatingInput from './FloatingInput';
import FloatingTextarea from './FloatingTextarea';
import './JobApplicationForm.css';
import Button from '../ui/Button';

type JobApplicationFormProps = {
  jobTitle: string;
};

export default function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire ici
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2 className="job-form-title">Postuler à : {jobTitle}</h2>

      <FloatingInput name="name" label="Nom complet" required />
      <FloatingInput name="email" label="Adresse email" type="email" required />
      <FloatingTextarea name="message" label="Message" rows={5} required />

      <div className="file-upload">
        <label htmlFor="cv" className="file-label">
          Joindre un CV
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

      <Button type="submit">Envoyer la candidature</Button>
    </form>
  );
}

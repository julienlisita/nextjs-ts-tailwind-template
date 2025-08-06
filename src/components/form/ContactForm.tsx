// src/components/ui/FloatingInput.tsx

'use client';

import Button from '../ui/Button';
import FloatingInput from '../form/FloatingInput';
import FloatingTextarea from '../form/FloatingTextarea';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/merci"
      className="contact-form"
    >
      {/* Champs Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Champs visibles */}
      <FloatingInput label="Nom" name="name" type="text" required />
      <FloatingInput label="Email" name="email" type="email" required />
      <FloatingTextarea label="Message" name="message" required />

      <div className="text-center">
        <Button type="submit" variant="primary">
          Envoyer
        </Button>
      </div>
    </form>
  );
}

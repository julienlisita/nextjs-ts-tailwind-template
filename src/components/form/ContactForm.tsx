// src/components/ui/FloatingInput.tsx

'use client';

import Button from '../ui/Button';
import FloatingInput from '../form/FloatingInput';
import FloatingTextarea from '../form/FloatingTextarea';
import './ContactForm.css';

type ContactFormProps = {
  /** Alignement du bouton CTA (appliqué à partir de lg) */
  ctaAlign?: 'left' | 'center' | 'right';
};

export default function ContactForm({ ctaAlign = 'left' }: ContactFormProps) {
  // mapping responsive : mobile = center, desktop selon prop
  const alignClass =
    ctaAlign === 'center'
      ? 'text-center lg:text-center'
      : ctaAlign === 'right'
        ? 'text-center lg:text-right'
        : 'text-center lg:text-left';

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

      {/* CTA : centré mobile, prop appliquée desktop */}
      <div className={alignClass}>
        <Button type="submit" variant="primary">
          Envoyer
        </Button>
      </div>
    </form>
  );
}

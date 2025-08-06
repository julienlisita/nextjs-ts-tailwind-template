// src/components/ui/FloatingTextArea.tsx

'use client';

import React from 'react';
import './FloatingTextarea.css';

type FloatingTextareaProps = {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function FloatingTextarea({
  label,
  name,
  rows = 5,
  required = false,
  className = '',
  ...props
}: FloatingTextareaProps) {
  return (
    <div className="relative z-0 w-full group">
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder=" "
        className={`floating-textarea ${className}`}
        {...props}
      />
      <label htmlFor={name} className="floating-textarea-label">
        {label}
      </label>
    </div>
  );
}

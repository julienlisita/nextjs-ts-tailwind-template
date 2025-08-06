// src/components/ui/FloatingInput.tsx

'use client';

import React from 'react';
import './FloatingInput.css';

type FloatingInputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FloatingInput({
  label,
  name,
  type = 'text',
  required = false,
  className = '',
  ...props
}: FloatingInputProps) {
  return (
    <div className={`floating-input-wrapper ${className}`}>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder=" "
        className="floating-input peer"
        {...props}
      />
      <label htmlFor={name} className="floating-input-label">
        {label}
      </label>
    </div>
  );
}

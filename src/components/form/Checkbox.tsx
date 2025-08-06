// src/components/ui/Checkbox.tsx

'use client';

import React from 'react';
import './Checkbox.css';

type CheckboxProps = {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  label,
  name,
  required = false,
  className = '',
  ...props
}: CheckboxProps) {
  return (
    <label className={`checkbox-label ${className}`}>
      <input
        type="checkbox"
        name={name}
        id={name}
        required={required}
        className="checkbox-input"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}

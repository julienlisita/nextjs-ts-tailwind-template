// src/components/ui/Radio.tsx

'use client';

import React from 'react';

type RadioProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  required?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Radio({
  label,
  name,
  value,
  checked,
  required = false,
  className = '',
  ...props
}: RadioProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-800">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        required={required}
        className={`h-4 w-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 ${className}`}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
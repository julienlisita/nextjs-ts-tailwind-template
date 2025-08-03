// src/components/ui/Checkbox.tsx

'use client';

import React from 'react';

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
    <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-800">
      <input
        type="checkbox"
        name={name}
        id={name}
        required={required}
        className={`h-4 w-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 ${className}`}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
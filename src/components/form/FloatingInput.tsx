// src/components/ui/FloatingInput.tsx

'use client';

import React from 'react';

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
    <div className={`relative z-0 w-full group ${className}`}>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder=" "
        className="
          block px-3 pb-2.5 pt-4 w-full text-sm text-black bg-white
          rounded-md border border-[#3a3a3a] appearance-none
          focus:outline-none focus:ring-0 focus:border-[#5AC8FA]
          peer transition
        "
        {...props}
      />
      <label
        htmlFor={name}
        className="
          absolute text-sm text-gray-600 duration-300 transform
          -translate-y-3 scale-75 top-2 z-10 origin-[0] left-3
          peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100
          peer-focus:scale-75 peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
}
'use client';
import React from 'react';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  placeholder?: string;
  className?: string;
}

export default function TextField({
  label,
  value,
  onChange,
  maxLength = 45,
  placeholder = '',
  className = '',
}: TextFieldProps) {
  return (
    <>
      <p className={` w-full mb-1 text-[#003366] ${className}`}>{label}</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full p-4 rounded-2xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 font-semibold"
      />
    </>
  );
}

'use client';
import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  className?: string;
}

export default function SelectField({
  label,
  value,
  onChange,
  options,
  className,
}: SelectFieldProps) {
  return (
    <>
      <p className={`w-full mb-1 text-[#003366] ${className}`}>{label}</p>
      <div className="relative w-full max-w-sm">
        <select
          value={value}
          onChange={onChange}
          className="appearance-none w-full p-4 rounded-2xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 cursor-pointer font-semibold"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>
    </>
  );
}

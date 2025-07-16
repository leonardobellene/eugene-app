'use client';
import React from 'react';
import TextField from '@/app/components/TextField';
import SelectField from '@/app/components/SelectField';

interface UserFormProps {
  nameInput: string;
  setNameInput: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const languageOptions = [
  'Spanish',
  'English',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Japanese',
  'Korean',
  'Chinese',
  'Arabic',
  'Hindi',
  'Russian',
];

const genderOptions = ['female', 'male', 'neutral'];

export default function UserForm({
  nameInput,
  setNameInput,
  gender,
  setGender,
  language,
  setLanguage,
  onSubmit,
}: UserFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm flex flex-col items-center space-y-4">
      <TextField
        label="Name:"
        value={nameInput}
        className="text-[#003366] text-shadow-beige font-semibold"
        onChange={(e) => {
          const value = e.target.value;
          if (value.length <= 45) setNameInput(value);
        }}
        placeholder="Enter your name"
      />
      <SelectField
        label="Gender:"
        value={gender}
        className="text-[#003366] text-shadow-beige font-semibold"
        onChange={(e) => setGender(e.target.value)}
        options={genderOptions}
      />
      <SelectField
        label="Language:"
        value={language}
        className="text-[#003366] text-shadow-beige font-semibold"
        onChange={(e) => setLanguage(e.target.value)}
        options={languageOptions}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-4 rounded-2xl font-semibold w-full cursor-pointer"
      >
        Save
      </button>
    </form>
  );
}

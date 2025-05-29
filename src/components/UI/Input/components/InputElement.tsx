import React from 'react';

interface InputElementProps {
  id: string;
  placeholder?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  classNameInput?: string;
  classNameLabel?: string;
}

export function InputElement({
  id,
  placeholder,
  inputProps,
  classNameInput,
  classNameLabel,
}: InputElementProps) {
  return (
    <>
      <input {...inputProps} id={id} className={classNameInput} />

      {/* label as placeholder /custom placeholder */}
      <label htmlFor={id} className={classNameLabel}>
        {placeholder}
      </label>
    </>
  );
}

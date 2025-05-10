import React, { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  radio?: boolean; // prop baru untuk bentuk bulat
  align?: 'before' | 'after';
  name?: string; // tambahan prop name untuk radio button
  onChange?: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  indeterminate = false,
  radio = false,
  align = 'after',
  name, // menambahkan name untuk radio button
  onChange,
  className = '',
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = () => {
    if (disabled) return;
    onChange?.(!checked);
  };

  const baseClass = 'h-5 w-5 border-gray-300 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed ';

  const shapeClass = radio
    ? `
      appearance-none rounded-full border border-blue-500
      checked:bg-blue-600 checked:border-blue-600
      checked:ring-2 checked:ring-blue-300
      relative
      before:content-[''] before:absolute before:inset-1 before:rounded-full 
      before:bg-white
      checked:before:bg-white
    `
    : 'form-checkbox rounded';

  const inputClass = twMerge(baseClass, shapeClass, className);

  return (
    <label className={twMerge('flex w-fit cursor-pointer gap-2', disabled && 'cursor-not-allowed opacity-50')}>
      {align === 'before' && label && <span>{label}</span>}
      <input
        type={radio ? 'radio' : 'checkbox'} // Menentukan tipe input (checkbox atau radio)
        ref={checkboxRef}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={radio ? name : undefined} // Hanya memberi name jika itu radio button
        className={inputClass}
      />
      {align === 'after' && label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;

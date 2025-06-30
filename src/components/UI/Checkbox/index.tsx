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
  name, // name for radio button
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

  const baseClass =
    'h-5 w-5 border-gray-300 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-bg-dark dark:checked:bg-blue-500 dark:disabled:border-gray-100 dark:checked:bg-blue-600';

  const shapeClass = radio
    ? `
    text-blue-600 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-bg-dark dark:border-gray-600
    `
    : 'form-checkbox rounded';

  const inputClass = twMerge(baseClass, shapeClass, className);

  return (
    <label
      className={twMerge(
        'flex w-fit cursor-pointer gap-2',
        disabled && 'cursor-not-allowed opacity-50'
      )}
    >
      {align === 'before' && label && <span>{label}</span>}
      <input
        type={radio ? 'radio' : 'checkbox'}
        ref={checkboxRef}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={radio ? name : undefined}
        className={inputClass}
      />
      {align === 'after' && label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;

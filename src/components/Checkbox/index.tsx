import React, { useEffect, useRef } from 'react';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  align?: 'before' | 'after';
  onChange?: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  indeterminate = false,
  align = 'after',
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

  const checkbox = (
    <input
      type="checkbox"
      ref={checkboxRef}
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      size={10}
      className="form-checkbox h-5 w-5 rounded border-gray-300 accent-blue-600"
    />
  );

  return (
    <label
      className={`flex w-fit cursor-pointer items-center gap-2 ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
    >
      {align === 'before' && label && <span>{label}</span>}
      {checkbox}
      {align === 'after' && label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;

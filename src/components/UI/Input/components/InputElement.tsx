import React from 'react';

interface InputElementProps {
  id: string;
  placeholder?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  classNameInput?: string;
  classNameLabel?: string;
}

export const InputElement = React.forwardRef<
  HTMLInputElement,
  InputElementProps
>(({ id, placeholder, inputProps, classNameInput, classNameLabel }, ref) => {
  return (
    <>
      <input {...inputProps} ref={ref} id={id} className={classNameInput} />
      <label htmlFor={id} className={classNameLabel}>
        {placeholder}
      </label>
    </>
  );
});

InputElement.displayName = 'InputElement';

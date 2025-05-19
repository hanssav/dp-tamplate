import { HTMLInputTypeAttribute } from 'react';

export const INPUT_TYPES = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
  DATEPICKER: 'datepicker',
  MONTH: 'month',
} as const;

export type InputType =
  | (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES]
  | HTMLInputTypeAttribute;

export interface InputProps {
  id: string;
  label: string;
  type?: InputType;
  value: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options?: { label: string; value: string | number }[];
  groupOptions?: {
    label: string;
    options: { label: string; value: string | number }[];
  }[];
  disabled?: boolean;
}

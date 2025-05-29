import { SelectDate } from '@components/Datepicker/helpers/types';
import { DateRange } from 'react-day-picker';

export function isDateRange(date: any): date is DateRange {
  return date && typeof date === 'object' && 'from' in date;
}

export function isDateArray(date: any): date is Date[] {
  return Array.isArray(date);
}

export const extractFocusedDate = (value?: SelectDate): Date => {
  if (!value) return new Date();
  if (value instanceof Date) return value;
  if (Array.isArray(value)) return value[0] ?? new Date();
  if ('from' in value && value.from instanceof Date) return value.from;
  return new Date();
};

export const getRangeDate = (date: Date) => {
  const from = new Date(date);
  from.setDate(from.getDate() - 2);

  const to = new Date(date);
  to.setDate(to.getDate() + 2);

  return { from, to };
};
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

/**
 * Format DayPicker value (single, multiple, or range) into a readable string.
 * Returns "-" if value is empty or invalid.
 */
export function formatDateValue(
  value: Date | Date[] | DateRange | undefined
): string {
  if (!value) return '-';

  // mode = singgle
  if (value instanceof Date) {
    return format(value, 'dd MMM yyyy');
  }

  // mode = multiple
  if (Array.isArray(value)) {
    return value.length
      ? value.map(d => format(d, 'dd MMM yyyy')).join(', ')
      : '-';
  }

  // mode = range
  if (typeof value === 'object' && 'from' in value) {
    const { from, to } = value as DateRange;
    if (from && to) {
      return `${format(from, 'dd MMM yyyy')} – ${format(to, 'dd MMM yyyy')}`;
    } else if (from) {
      return format(from, 'dd MMM yyyy');
    }
  }

  return '-';
}

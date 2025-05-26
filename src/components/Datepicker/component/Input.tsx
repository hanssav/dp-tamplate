import { SelectDate } from '@components/Datepicker/helpers/types';
import { isDateArray, isDateRange } from '@components/Datepicker/helpers/utils';
import { Input } from '@components/Input';
import { INPUT_TYPES } from '@constant/components/InputTypes';
import { format as formatFn } from 'date-fns';
import { useMemo } from 'react';

type DatepickerInputProps = {
  id: string;
  format?: string;
  disabled?: boolean;
  selectedDate?: SelectDate;
  togglePicker: () => void;
  placeholder?: string;
};
export function DatepickerInput({
  id,
  disabled,
  selectedDate,
  format = 'MM/dd/yyyy',
  togglePicker,
  ...props
}: DatepickerInputProps) {
  const inputValue: string = useMemo(() => {
    if (selectedDate instanceof Date) {
      return formatFn(selectedDate, format);
    }
    if (isDateArray(selectedDate) && selectedDate.length > 0) {
      return formatFn(selectedDate[0], format);
    }
    if (isDateRange(selectedDate) && selectedDate.from) {
      const from = selectedDate.from;
      const to = selectedDate.to ?? from;
      return `${formatFn(from, format)} - ${formatFn(to, format)}`;
    }
    return '';
  }, [selectedDate, format]);

  return (
    <Input
      readOnly
      id={id}
      type={INPUT_TYPES.TEXT}
      disabled={disabled}
      onClick={togglePicker}
      value={inputValue}
      placeholder={props.placeholder}
      {...props}
    />
  );
}

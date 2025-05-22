import React, { useEffect, useRef } from 'react';
import { format as formatFn } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Box from '@components/Box';
import Typography from '@components/Typography';
import { Input } from '@components/Input';
import { INPUT_TYPES } from '@constant/components/InputTypes';
import { DatepickerProps, MODE } from '@components/Datepicker/types';
import { useDaypickerController } from '@components/Datepicker/useDaypickerController';

export const Datepicker: React.FC<DatepickerProps> = ({
  value,
  onChange,
  placeholder = 'Select a date',
  format = 'MM/dd/yyyy',
  className = '',
  disabled = false,
  id,
  mode = MODE.SINGLE,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { autoRange } = props;

  const { selectedDate, isOpen, togglePicker, dayPickerProps, closePicker } =
    useDaypickerController({ value, onChange, mode, autoRange });

  let inputValue = '';

  if (selectedDate instanceof Date) {
    inputValue = formatFn(selectedDate, format);
  } else if (Array.isArray(selectedDate) && selectedDate[0]) {
    inputValue = formatFn(selectedDate[0], format);
  } else if (selectedDate && 'from' in selectedDate && selectedDate.from) {
    const from = selectedDate.from;
    const to = selectedDate.to ?? from;
    inputValue = `${formatFn(from, format)} - ${formatFn(to, format)}`;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        closePicker();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <Input
        readOnly
        id={id}
        type={INPUT_TYPES.TEXT}
        disabled={disabled}
        onClick={togglePicker}
        value={inputValue}
        label="Select Date"
        {...props}
      />

      {isOpen && (
        <div className="absolute z-10 rounded bg-white p-4 shadow-soft dark:bg-gray-800 dark:text-white">
          <DayPicker {...dayPickerProps} />
        </div>
      )}

      <Box className="mx-2">
        <Typography textStyle="body" as="p">
          {format}
        </Typography>
      </Box>
    </div>
  );
};

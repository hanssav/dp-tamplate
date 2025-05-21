import React, { useEffect, useRef, useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import { format as formatFn } from 'date-fns';
import Box from '@components/Box';
import Typography from '@components/Typography';
import 'react-day-picker/dist/style.css';
import { Input } from '@components/Input';
import { INPUT_TYPES } from '@constant/components/InputTypes';
import { createDayPickerProps } from '@components/Datepicker/daypickerProps';
import {
  DatepickerProps,
  MODE,
  SelectDate,
  ViewMode,
  VIEW_MODE,
} from '@components/Datepicker/types';

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

  const [selectedDate, setSelectedDate] = useState<SelectDate>(value);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>(VIEW_MODE.DAY);
  const [focusedDate, setFocusedDate] = useState(value ?? new Date());

  const [startYear, setStartYear] = useState(() => {
    const year = focusedDate.getFullYear();
    return Math.floor((year - 8) / 4) * 4;
  });

  const mappingOfYears = Array.from({ length: 24 }, (_, i) => startYear + i);

  const handlePrevClick = () => {
    if (viewMode === VIEW_MODE.YEAR) {
      setStartYear(prev => prev - 24);
    } else if (viewMode === VIEW_MODE.MONTH) {
      setFocusedDate(
        new Date(focusedDate.getFullYear() - 1, focusedDate.getMonth(), 1)
      );
    } else {
      setFocusedDate(
        new Date(focusedDate.getFullYear(), focusedDate.getMonth() - 1, 1)
      );
    }
  };

  const handleNextClick = () => {
    if (viewMode === VIEW_MODE.YEAR) {
      setStartYear(prev => prev + 24);
    } else if (viewMode === VIEW_MODE.MONTH) {
      setFocusedDate(
        new Date(focusedDate.getFullYear() + 1, focusedDate.getMonth(), 1)
      );
    } else {
      setFocusedDate(
        new Date(focusedDate.getFullYear(), focusedDate.getMonth() + 1, 1)
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        closePicker();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closePicker = () => {
    setIsOpen(false);
    setViewMode(VIEW_MODE.DAY);
  };

  const isDateRange = (date: any): date is DateRange =>
    date && typeof date === 'object' && 'from' in date;

  const handleSelect = (date: SelectDate) => {
    if (viewMode !== VIEW_MODE.DAY || !date) return;

    switch (mode) {
      case MODE.SINGLE:
        if (date instanceof Date) {
          const newDate = new Date(
            focusedDate.getFullYear(),
            focusedDate.getMonth(),
            date.getDate()
          );
          setSelectedDate(newDate);
          onChange?.(newDate);
          closePicker();
        }
        break;

      case MODE.RANGE:
        if (isDateRange(date)) {
          if (
            selectedDate &&
            isDateRange(selectedDate) &&
            selectedDate.from !== selectedDate.to
          ) {
            closePicker();
          }
          setSelectedDate(date);
          onChange?.(date);
          closePicker();
        }
        break;

      case MODE.MULTIPLE:
        if (Array.isArray(date)) {
          setSelectedDate(date);
          onChange?.(date);
          closePicker();
        }
        break;

      default:
        break;
    }
  };

  const togglePicker = () => {
    if (disabled) return;

    let date: Date = new Date();

    if (selectedDate instanceof Date) {
      date = selectedDate;
    } else if (Array.isArray(selectedDate) && selectedDate.length > 0) {
      date = selectedDate[0];
    } else if (
      selectedDate &&
      'from' in selectedDate &&
      selectedDate.from instanceof Date
    ) {
      date = selectedDate.from;
    }

    setIsOpen(prev => !prev);
    setFocusedDate(date);
  };

  const dayPickerProps = createDayPickerProps({
    selectedDate,
    handleSelect,
    focusedDate,
    setFocusedDate,
    handlePrevClick,
    handleNextClick,
    viewMode,
    setViewMode,
    startYear,
    mappingOfYears,
    mode,
  });

  return (
    <div className="relative w-full" ref={containerRef}>
      <Input
        readOnly
        id={id}
        type={INPUT_TYPES.TEXT}
        disabled={disabled}
        onClick={togglePicker}
        value={
          selectedDate instanceof Date
            ? formatFn(selectedDate, format)
            : Array.isArray(selectedDate) && selectedDate[0]
              ? formatFn(selectedDate[0], format)
              : selectedDate && 'from' in selectedDate && selectedDate.from
                ? `${formatFn(selectedDate.from, format)} - ${formatFn(selectedDate.from, format)}`
                : ''
        }
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

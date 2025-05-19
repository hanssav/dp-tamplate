import React, { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format as formatFn } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Box from '@components/Box';
import Typography from '@components/Typography';
import MonthCaption from '@components/Datepicker/MonthCaption';
import MonthGrid from '@components/Datepicker/MonthGrid';

import 'react-day-picker/dist/style.css';
import { Input } from '@components/Input';
import { INPUT_TYPES } from '@constant/components/InputTypes';

type ViewMode = 'day' | 'month' | 'year';

type DatepickerProps = {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  format?: string;
  className?: string;
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Datepicker: React.FC<DatepickerProps> = ({
  value,
  onChange,
  placeholder = 'Select a date',
  format = 'MM/dd/yyyy',
  className = '',
  disabled = false,
  id,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('day');
  const [focusedDate, setFocusedDate] = useState(value ?? new Date());

  const startYear = Math.floor((focusedDate.getFullYear() - 8) / 4) * 4;
  const mappingOfYears = Array.from({ length: 24 }, (_, i) => startYear + i);

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
    setViewMode('day');
  };

  const handleSelect = (date: Date | undefined) => {
    if (viewMode === 'day' && date) {
      const newDate = new Date(
        focusedDate.getFullYear(),
        focusedDate.getMonth(),
        date.getDate()
      );
      setSelectedDate(newDate);
      onChange?.(newDate);
    }
    closePicker();
  };

  const togglePicker = () => {
    if (disabled) return;
    setIsOpen(prev => !prev);
    setFocusedDate(selectedDate ?? new Date());
  };

  const handlePrevClick = () => {
    if (viewMode === 'year') {
      setFocusedDate(new Date(startYear - 24, 0, 1));
    } else if (viewMode === 'month') {
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
    if (viewMode === 'year') {
      setFocusedDate(new Date(startYear + 24, 0, 1));
    } else if (viewMode === 'month') {
      setFocusedDate(
        new Date(focusedDate.getFullYear() + 1, focusedDate.getMonth(), 1)
      );
    } else {
      setFocusedDate(
        new Date(focusedDate.getFullYear(), focusedDate.getMonth() + 1, 1)
      );
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <Input
        readOnly
        id={id}
        type={INPUT_TYPES.TEXT}
        disabled={disabled}
        onClick={togglePicker}
        value={selectedDate ? formatFn(selectedDate, format) : ''}
        label="Select Date"
        {...props}
      />

      {isOpen && (
        <div className="absolute z-10 rounded bg-white p-4 shadow-soft dark:bg-gray-800 dark:text-white">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            month={focusedDate}
            onMonthChange={setFocusedDate}
            modifiersClassNames={{
              selected: 'bg-primary rounded-full text-white',
              today: 'text-blue-700',
            }}
            className="w-full rounded bg-white dark:bg-gray-800"
            classNames={{
              day: 'hover:bg-gray-300 rounded-full cursor-pointer dark:hover:bg-gray-700',
              table: 'w-full table-fixed',
              cell: 'text-center',
            }}
            components={{
              PreviousMonthButton: props => (
                <button {...props} onClick={handlePrevClick}>
                  <ChevronLeft className="h-5 w-5" />
                </button>
              ),
              NextMonthButton: props => (
                <button {...props} onClick={handleNextClick}>
                  <ChevronRight className="h-5 w-5" />
                </button>
              ),
              CaptionLabel: p => (
                <MonthCaption
                  {...p}
                  viewMode={viewMode}
                  startYear={startYear}
                  focusedDate={focusedDate}
                  onCaptionClick={() =>
                    setViewMode(current => (current === 'day' ? 'year' : 'day'))
                  }
                />
              ),
              ...(viewMode !== 'day' && {
                MonthGrid: () => (
                  <MonthGrid
                    viewMode={viewMode}
                    focusedDate={focusedDate}
                    setFocusedDate={setFocusedDate}
                    setViewMode={setViewMode}
                    selectedDate={selectedDate}
                    mappingOfYears={mappingOfYears}
                  />
                ),
                DayButton: () => <></>,
              }),
            }}
          />
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

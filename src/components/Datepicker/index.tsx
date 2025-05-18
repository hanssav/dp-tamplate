import React, { useEffect, useRef, useState } from 'react';
import { CaptionLabelProps, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format as formatFn } from 'date-fns';
import Box from '@components/Box';
import Typography from '@components/Typography';
import { twMerge } from 'tailwind-merge';
import Button from '@components/Button';
import CustomMonthGrid from '@components/Datepicker/MonthGrid';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-day-picker/style.css';
import 'react-day-picker/dist/style.css';

type DatepickerProps = {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  format?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

type CustomMonthCaptionProps = CaptionLabelProps & {
  onCaptionClick?: () => void;
  viewMode?: 'day' | 'month' | 'year';
  startYear?: number;
  focusedDate: Date;
};

const CustomMonthCaption: React.FC<CustomMonthCaptionProps> = ({
  className,
  children,
  role,
  'aria-live': ariaLive,
  onCaptionClick,
  viewMode,
  startYear,
  focusedDate,
}) => {
  const convertYearLabel = () => {
    const strLabel = String(startYear);
    const match = strLabel.match(/\b\d{4}\b/);
    if (!match) return null;

    const start = parseInt(match[0], 10);
    const end = start + 23;
    return `${start} - ${end}`;
  };

  const yearsLabel = convertYearLabel();

  const convertDefaultLabel = () => {
    const str = String(children);
    const date = new Date(str);

    if (isNaN(date.getTime())) return '';

    const year = focusedDate.getFullYear();
    const month = formatFn(focusedDate, 'MMM');

    return `${month} ${year}`;
  };

  const label = convertDefaultLabel();
  return (
    <Button
      color="basic"
      size="md"
      className={twMerge(className)}
      role={role}
      aria-live={ariaLive}
      onClick={onCaptionClick}
    >
      {viewMode === 'year'
        ? yearsLabel
        : viewMode === 'month'
          ? label
          : children}
    </Button>
  );
};

export const Datepicker: React.FC<DatepickerProps> = ({
  value,
  onChange,
  placeholder = 'Select a date',
  format = 'MM/dd/yyyy',
  className = '',
  disabled = false,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'day' | 'month' | 'year'>('day');
  const [focusedDate, setFocusedDate] = useState(new Date());
  const [viewDate, setViewDate] = useState(new Date());

  const containerRef = useRef<HTMLDivElement>(null);
  const [startYear, setStartYear] = useState(() =>
    Math.floor(Math.floor((viewDate.getFullYear() - 8) / 4) * 4)
  );

  const mappingOfYears = Array.from({ length: 24 }, (_, i) => startYear + i);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setViewMode('day');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (date: Date | undefined) => {
    if (viewMode === 'day' && date) {
      const year = focusedDate.getFullYear();
      const month = focusedDate.getMonth();
      const day = date.getDate();

      setSelectedDate(new Date(year, month, day));
      setIsOpen(false);
    }

    //handle if we choose same value
    return setIsOpen(false);
  };

  const handlePrevClick = () => {
    if (viewMode === 'year') {
      const newStartYear = startYear - 24;
      setStartYear(newStartYear);
      setViewDate(new Date(newStartYear, 0, 1));
    } else if (viewMode === 'month') {
      setViewDate(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
    } else {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    }
  };

  const handleNextClick = () => {
    if (viewMode === 'year') {
      const newStartYear = startYear + 24;
      setStartYear(newStartYear);
      setViewDate(new Date(newStartYear, 0, 1));
    } else if (viewMode === 'month') {
      setViewDate(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
    } else {
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    }
  };

  const handleOnclick = () => {
    if (disabled) return;

    setIsOpen(!isOpen);
    setViewDate(selectedDate ?? new Date());
  };

  console.log(viewDate, 'check viewDate');
  return (
    <div className="relative w-full" ref={containerRef}>
      <input
        type="text"
        readOnly
        disabled={disabled}
        onClick={handleOnclick}
        value={selectedDate ? formatFn(selectedDate, format) : ''}
        placeholder={placeholder}
        className={twMerge(
          `peer w-full rounded-lg border border-gray-300 bg-transparent text-black placeholder-transparent outline-none focus:outline-none focus:ring-0 dark:text-white dark:focus:bg-gray-800 dark:focus:text-white`,
          className,
          disabled
            ? 'border-gray-300 text-gray-300 dark:border-gray-600 dark:text-gray-500 '
            : ''
        )}
        {...props}
      />

      {isOpen && (
        <div className="absolute z-10 flex items-center rounded  bg-white p-4 text-black shadow-soft dark:bg-gray-800 dark:text-white">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            month={viewDate}
            onMonthChange={setFocusedDate}
            modifiersClassNames={{
              selected: 'bg-primary rounded-full text-white',
              today: ' text-blue-700',
              weekend: '',
            }}
            className="custom-daypicker w-full rounded bg-white text-black dark:bg-gray-800 dark:text-white"
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
                <CustomMonthCaption
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
                  <CustomMonthGrid
                    viewMode={viewMode}
                    focusedDate={focusedDate}
                    setFocusedDate={setFocusedDate}
                    setViewMode={setViewMode}
                    selectedDate={selectedDate}
                    mappingOfYears={mappingOfYears}
                    setViewDate={setViewDate}
                  />
                ),
              }),
              ...(viewMode !== 'day' ? { DayButton: () => <></> } : {}),
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

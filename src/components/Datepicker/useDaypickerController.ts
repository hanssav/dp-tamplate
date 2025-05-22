// hooks/useDaypickerController.ts
import { useState, useCallback, useMemo } from 'react';
import { DateRange } from 'react-day-picker';
import {
  MODE,
  VIEW_MODE,
  ViewMode,
  SelectDate,
  Mode,
} from '@components/Datepicker/types';
import { createDayPickerProps } from '@components/Datepicker/daypickerProps';

const extractFocusedDate = (value?: SelectDate): Date => {
  if (!value) return new Date();
  if (value instanceof Date) return value;
  if (Array.isArray(value)) return value[0] ?? new Date();
  if ('from' in value && value.from instanceof Date) return value.from;
  return new Date();
};

export const useDaypickerController = ({
  value,
  onChange,
  mode = MODE.SINGLE,
  autoRange = false,
}: {
  value: SelectDate;
  onChange?: (value: SelectDate) => void;
  mode?: Mode;
  autoRange?: boolean;
}) => {
  const [selectedDate, setSelectedDate] = useState<SelectDate>(value);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>(VIEW_MODE.DAY);

  const [focusedDate, setFocusedDate] = useState<Date>(() =>
    extractFocusedDate(value)
  );

  const [startYear, setStartYear] = useState(() => {
    const year = focusedDate.getFullYear();
    return Math.floor((year - 8) / 4) * 4;
  });

  const mappingOfYears = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => startYear + i);
  }, [startYear]);

  const handlePrevClick = useCallback(() => {
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
  }, [viewMode, focusedDate]);

  const handleNextClick = useCallback(() => {
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
  }, [viewMode, focusedDate]);

  const closePicker = useCallback(() => {
    setIsOpen(false);
    setViewMode(VIEW_MODE.DAY);
  }, []);

  const isDateRange = useCallback(
    (date: any): date is DateRange =>
      date && typeof date === 'object' && 'from' in date,
    []
  );

  const handleSelect = useCallback(
    (date: SelectDate) => {
      if (viewMode !== VIEW_MODE.DAY || !date) return;

      switch (mode) {
        case MODE.SINGLE:
          if (date instanceof Date) {
            if (autoRange) {
              const from = new Date(date);
              from.setDate(from.getDate() - 2);

              const to = new Date(date);
              to.setDate(to.getDate() + 2);

              const range = { from, to };
              setSelectedDate(range);
              onChange?.(range);
              closePicker();
            } else {
              const newDate = new Date(
                focusedDate.getFullYear(),
                focusedDate.getMonth(),
                date.getDate()
              );
              setSelectedDate(newDate);
              onChange?.(newDate);
              closePicker();
            }
          }
          break;

        case MODE.RANGE:
          if (isDateRange(date)) {
            setSelectedDate(date);
            onChange?.(date);
            if (date.from !== date.to) closePicker();
          }
          break;
        case MODE.MULTIPLE:
          if (Array.isArray(date)) {
            setSelectedDate(date);
            onChange?.(date);
            closePicker();
          }
          break;
      }
    },
    [mode, viewMode, focusedDate, onChange, closePicker, isDateRange]
  );

  const togglePicker = useCallback(() => {
    if (selectedDate instanceof Date) {
      setFocusedDate(selectedDate);
    } else if (Array.isArray(selectedDate) && selectedDate.length > 0) {
      setFocusedDate(selectedDate[0]);
    } else if (isDateRange(selectedDate) && selectedDate.from instanceof Date) {
      setFocusedDate(selectedDate.from);
    } else {
      setFocusedDate(new Date());
    }

    setIsOpen(prev => !prev);
  }, [selectedDate, isDateRange]);

  const dayPickerProps = useMemo(() => {
    return createDayPickerProps({
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
  }, [
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
  ]);

  return {
    selectedDate,
    setSelectedDate,
    isOpen,
    togglePicker,
    closePicker,
    dayPickerProps,
    focusedDate,
  };
};

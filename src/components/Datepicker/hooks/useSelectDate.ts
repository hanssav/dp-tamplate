import { UseSelectProps } from './../helpers/types';
import { useNavigateDate } from '@components/Datepicker/hooks/useNavigateDate';
import {
  VIEW_MODE,
  MODE,
  SelectDate,
} from '@components/Datepicker/helpers/types';
import { isDateRange } from '@components/Datepicker/helpers/utils';
import { useCallback, useState } from 'react';

export function useSelectDate({
  mode,
  autoRange,
  onChange,
  closePicker,
  focusedDate,
}: UseSelectProps) {
  const { viewMode } = useNavigateDate();
  const [selectedDate, setSelectedDate] = useState<SelectDate>();

  const handleSelect = useCallback(
    (date: SelectDate) => {
      if (viewMode !== VIEW_MODE.DAY || !date || !focusedDate) return;

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

  return { selectedDate, setSelectedDate, handleSelect };
}

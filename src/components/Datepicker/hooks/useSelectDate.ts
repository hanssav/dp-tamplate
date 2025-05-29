import { getRangeDate } from './../helpers/utils';
import { UseSelectProps } from './../helpers/types';
import { useNavigateDate } from '@components/Datepicker/hooks/useNavigateDate';
import {
  VIEW_MODE,
  MODE,
  SelectDate,
} from '@components/Datepicker/helpers/types';
import { isDateRange } from '@components/Datepicker/helpers/utils';
import { useCallback } from 'react';

export function useSelectDate({
  item,
  onChange,
  closePicker,
  focusedDate,
  selectedDate,
  setSelectedDate,
}: UseSelectProps) {
  const { viewMode } = useNavigateDate();

  const handleSelect = useCallback(
    (date: SelectDate) => {
      if (viewMode !== VIEW_MODE.DAY || !date || !focusedDate) return;

      switch (item.mode) {
        case MODE.SINGLE:
          if (date instanceof Date) {
            if (item.autoRange) {
              const range = getRangeDate(date);
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
    [item.mode, viewMode, focusedDate, onChange, closePicker, isDateRange]
  );

  return { selectedDate, setSelectedDate, handleSelect };
}

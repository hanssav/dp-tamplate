import { getRangeDate } from './../helpers/utils';
import { UseSelectProps } from './../helpers/types';
import { useNavigateDate } from '@components/UI/Datepicker/hooks/useNavigateDate';
import {
  VIEW_MODE,
  MODE,
  SelectDate,
} from '@components/UI/Datepicker/helpers/types';
import { isDateRange } from '@components/UI/Datepicker/helpers/utils';
import { useCallback } from 'react';

export function useSelectDate({
  item,
  onChange,
  closePicker,
  focusedDate,
  selectedDate,
  setSelectedDate,
  isUseAction,
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
              if (!isUseAction) closePicker();
            } else {
              const newDate = new Date(
                focusedDate.getFullYear(),
                focusedDate.getMonth(),
                date.getDate()
              );

              setSelectedDate(newDate);
              if (!isUseAction) closePicker();
              onChange?.(newDate);
            }
          }
          break;

        case MODE.RANGE:
          if (isDateRange(date)) {
            setSelectedDate(date);
            onChange?.(date);
            if (date.from !== date.to && !isUseAction) closePicker();
          }
          break;
        case MODE.MULTIPLE:
          if (Array.isArray(date)) {
            setSelectedDate(date);
            onChange?.(date);
            if (!isUseAction) closePicker();
          }
          break;
      }
    },
    [
      item.mode,
      viewMode,
      focusedDate,
      onChange,
      closePicker,
      isUseAction,
      setSelectedDate,
      item.autoRange,
    ]
  );

  return { selectedDate, setSelectedDate, handleSelect };
}

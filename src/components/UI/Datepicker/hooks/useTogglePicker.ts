import { useCallback } from 'react';
import { isDateRange } from '@components/UI/Datepicker/helpers/utils';
import { SelectDate } from '@components/UI/Datepicker/helpers/types';

export const useTogglePicker = (
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  selectedDate: SelectDate,
  setFocusedDate: (date: Date) => void
) => {
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

    setIsOpen(prev => {
      const next = !prev;
      return next;
    });
  }, [selectedDate, setFocusedDate, setIsOpen]);

  return { togglePicker };
};

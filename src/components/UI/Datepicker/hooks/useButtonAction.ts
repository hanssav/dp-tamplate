import { SelectDate } from '@components/UI/Datepicker/helpers/types';
import { useState } from 'react';

export const useButtonAction = (
  closePicker: () => void,
  setSelectedDate: (date: SelectDate | undefined) => void,
  selectedDate: SelectDate
) => {
  const [tempDate, setTempDate] = useState<SelectDate>();

  const onApply = () => {
    closePicker();
  };

  const onCancel = () => {
    setTempDate(selectedDate);
    closePicker();
    setSelectedDate(tempDate);
    setTempDate(null);
  };

  return {
    onApply,
    onCancel,
  };
};

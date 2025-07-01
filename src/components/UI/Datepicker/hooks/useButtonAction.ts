import { SelectDate } from '@components/UI/Datepicker/helpers/types';
import { useState, useEffect } from 'react';

type UseButtonActionProps = {
  closePicker: () => void;
  setSelectedDate: (date: SelectDate | undefined) => void;
  selectedDate: SelectDate;
  isOpen: boolean;
};

export const useButtonAction = ({
  closePicker,
  setSelectedDate,
  selectedDate,
  isOpen,
}: UseButtonActionProps) => {
  const [tempDate, setTempDate] = useState<SelectDate>(selectedDate);

  useEffect(() => {
    if (isOpen) {
      setTempDate(selectedDate);
    }
  }, [isOpen, selectedDate]);

  const onApply = () => {
    closePicker();
  };

  const onCancel = () => {
    closePicker();
    setSelectedDate(tempDate);
  };

  return {
    onApply,
    onCancel,
  };
};

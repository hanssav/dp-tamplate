import { ViewMode, VIEW_MODE } from '@components/UI/Datepicker/helpers/types';
import { Dispatch, SetStateAction, useCallback } from 'react';

export const useClosePicker = (
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setViewMode: Dispatch<SetStateAction<ViewMode>>
) => {
  const closePicker = useCallback(() => {
    setIsOpen(false);
    setViewMode(VIEW_MODE.DAY);
  }, [setIsOpen, setViewMode]);

  return { closePicker };
};

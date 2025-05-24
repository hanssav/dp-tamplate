import { ViewMode, VIEW_MODE } from '@components/Datepicker/helpers/types';
import { useCallback, useEffect, useState } from 'react';

export function useNavigateDate() {
  const [viewMode, setViewMode] = useState<ViewMode>(VIEW_MODE.DAY);

  const [focusedDate, setFocusedDate] = useState<Date | undefined>();
  const [startYear, setStartYear] = useState<number | undefined>();

  useEffect(() => {
    if (focusedDate) {
      const year = focusedDate.getFullYear();
      setStartYear(Math.floor((year - 8) / 4) * 4);
    }
  }, [focusedDate]);

  const handlePrevClick = useCallback(() => {
    if (!focusedDate) return;
    if (viewMode === VIEW_MODE.YEAR) {
      setStartYear(prev => (prev ?? new Date().getFullYear()) - 24);
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
    if (!focusedDate) return;

    if (viewMode === VIEW_MODE.YEAR) {
      setStartYear(prev => (prev ?? new Date().getFullYear()) + 24);
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

  return {
    handleNextClick,
    handlePrevClick,
    viewMode,
    setViewMode,
    focusedDate,
    setFocusedDate,
    startYear,
    setStartYear,
  };
}

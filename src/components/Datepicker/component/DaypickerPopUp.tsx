import { createDayPickerProps } from '@components/Datepicker/helpers/daypickerProps';
import { DaypickerPopUpProps } from '@components/Datepicker/helpers/types';
import { useMemo } from 'react';
import { DayPicker } from 'react-day-picker';

export function DaypickerPopUp({
  selectedDate,
  handleSelect,
  focusedDate,
  setFocusedDate,
  handlePrevClick,
  handleNextClick,
  viewMode,
  setViewMode,
  startYear,
  mode,
}: DaypickerPopUpProps) {
  const mappingOfYears = useMemo(() => {
    if (!startYear) return;
    return Array.from({ length: 24 }, (_, i) => startYear + i);
  }, [startYear]);

  const dayPickerProps = useMemo(() => {
    if (!startYear || !mappingOfYears || !focusedDate) return;

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


  return (
    <div className="absolute z-10 rounded bg-white p-4 shadow-soft dark:bg-gray-800 dark:text-white">
      <DayPicker {...dayPickerProps} />
    </div>
  );
}

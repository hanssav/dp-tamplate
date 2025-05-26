import React, { useRef, useState } from 'react';
import 'react-day-picker/dist/style.css';
import Box from '@components/Box';
import Typography from '@components/Typography';
import { DatepickerProps, MODE } from '@components/Datepicker/helpers/types';
import { useNavigateDate } from '@components/Datepicker/hooks/useNavigateDate';
import { useSelectDate } from '@components/Datepicker/hooks/useSelectDate';
import { useClosePicker } from '@components/Datepicker/hooks/useClosePicker';
import { useTogglePicker } from '@components/Datepicker/hooks/useTogglePicker';
import { DatepickerInput } from '@components/Datepicker/component/Input';
import { DaypickerPopUp } from '@components/Datepicker/component/DaypickerPopUp';
import { useClickOutside } from '@hooks/useClickOutside';

export const Datepicker: React.FC<DatepickerProps> = ({
  onChange,
  placeholder = 'Select a date',
  format = 'MM/dd/yyyy',
  className = '',
  disabled = false,
  id,
  mode = MODE.SINGLE,
  autoRange = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    setViewMode,
    viewMode,
    focusedDate,
    setFocusedDate,
    startYear,
    handleNextClick,
    handlePrevClick,
  } = useNavigateDate();
  const [isOpen, setIsOpen] = useState(false);
  const { closePicker } = useClosePicker(setIsOpen, setViewMode);
  const selectProps = { mode, autoRange, onChange, closePicker, focusedDate };
  const { selectedDate, handleSelect } = useSelectDate(selectProps);
  const { togglePicker } = useTogglePicker(
    isOpen,
    setIsOpen,
    selectedDate,
    setFocusedDate
  );

  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <div id={id} className="relative w-full" ref={containerRef}>
      <DatepickerInput
        id={id}
        disabled={disabled}
        selectedDate={selectedDate}
        format={format}
        togglePicker={togglePicker}
        placeholder={placeholder}
        {...props}
      />
      {isOpen && (
        <DaypickerPopUp
          selectedDate={selectedDate}
          handleSelect={handleSelect}
          focusedDate={focusedDate}
          setFocusedDate={setFocusedDate}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          viewMode={viewMode}
          setViewMode={setViewMode}
          startYear={startYear}
          mode={mode}
        />
      )}

      <Box className="mx-2">
        <Typography textStyle="body" as="p">
          {format}
        </Typography>
      </Box>
    </div>
  );
};

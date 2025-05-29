import React, { useRef, useState } from 'react';
import 'react-day-picker/dist/style.css';
import Box from '@components/UI/Box';
import Typography from '@components/UI/Typography';
import { DatepickerProps, MODE } from '@components/UI/Datepicker/helpers/types';
import { useNavigateDate } from '@components/UI/Datepicker/hooks/useNavigateDate';
import { useSelectDate } from '@components/UI/Datepicker/hooks/useSelectDate';
import { useClosePicker } from '@components/UI/Datepicker/hooks/useClosePicker';
import { useTogglePicker } from '@components/UI/Datepicker/hooks/useTogglePicker';
import { DatepickerInput } from '@components/UI/Datepicker/component/Input';
import { DaypickerPopUp } from '@components/UI/Datepicker/component/DaypickerPopUp';
import { useClickOutside } from '@hooks/useClickOutside';

export const Datepicker: React.FC<DatepickerProps> = ({
  onChange,
  disabled = false,
  id,
  selectedDate,
  setSelectedDate,
  ...props
}) => {
  const item = props.item;
  const placeholder = item.placeholder ?? 'Select a date';
  const mode = item.mode ?? MODE.SINGLE;
  const format = item.format ?? 'MM/dd/yyyy';

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
  const selectProps = {
    item,
    onChange,
    closePicker,
    focusedDate,
    selectedDate,
    setSelectedDate,
  };
  const { handleSelect } = useSelectDate(selectProps);
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

      <Box className="mx-2 mb-5">
        <Typography textStyle="body" as="p">
          {props.labelFormat ?? format}
        </Typography>
      </Box>
    </div>
  );
};

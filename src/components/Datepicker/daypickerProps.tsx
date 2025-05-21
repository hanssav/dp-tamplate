import { DayPickerProps } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MonthCaption from './MonthCaption';
import MonthGrid from './MonthGrid';
import {
  CreateDayPickerPropsArgs,
  VIEW_MODE,
} from '@components/Datepicker/types';

export function createDayPickerProps({
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
}: CreateDayPickerPropsArgs): DayPickerProps {
  return {
    mode: 'single',
    selected: selectedDate,
    onSelect: handleSelect,
    month: focusedDate,
    onMonthChange: setFocusedDate,
    modifiersClassNames: {
      selected: 'bg-primary text-white  hover:!bg-hover-primary',
      today:
        'border border-primary rounded-full flex items-center justify-center',
    },
    className: 'w-full rounded bg-white dark:bg-gray-800',
    classNames: {
      day: 'hover:bg-gray-100 rounded-full cursor-pointer dark:hover:bg-gray-700',
      table: 'gap-2',
      cell: 'text-center',
    },
    components: {
      PreviousMonthButton: props => (
        <button {...props} onClick={handlePrevClick}>
          <ChevronLeft className="h-5 w-5" />
        </button>
      ),
      NextMonthButton: props => (
        <button {...props} onClick={handleNextClick}>
          <ChevronRight className="h-5 w-5" />
        </button>
      ),
      CaptionLabel: p => (
        <MonthCaption
          {...p}
          viewMode={viewMode}
          startYear={startYear}
          focusedDate={focusedDate}
          onCaptionClick={() => {
            setViewMode(current =>
              current === VIEW_MODE.DAY ? VIEW_MODE.YEAR : VIEW_MODE.DAY
            );
            console.log(focusedDate, 'focusedDate');
          }}
        />
      ),
      ...(viewMode !== 'day' && {
        MonthGrid: () => (
          <MonthGrid
            viewMode={viewMode}
            focusedDate={focusedDate}
            setFocusedDate={setFocusedDate}
            setViewMode={setViewMode}
            selectedDate={selectedDate}
            mappingOfYears={mappingOfYears}
          />
        ),
        DayButton: () => <></>,
      }),
    },
  };
}

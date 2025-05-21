import { DateRange, DayPickerProps } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MonthCaption from './MonthCaption';
import MonthGrid from './MonthGrid';
import {
  CreateDayPickerPropsArgs,
  VIEW_MODE,
} from '@components/Datepicker/types';

export const MODE = {
  SINGLE: 'single',
  RANGE: 'range',
  MULTIPLE: 'multiple',
} as const;
export type ModeType = (typeof MODE)[keyof typeof MODE];

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
  mode,
}: CreateDayPickerPropsArgs): DayPickerProps {
  const baseProps = {
    month: focusedDate,
    onMonthChange: setFocusedDate,
    modifiersClassNames: {
      selected: 'bg-primary text-white hover:!bg-hover-primary',
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
      PreviousMonthButton: (props: any) => (
        <button {...props} onClick={handlePrevClick}>
          <ChevronLeft className="h-5 w-5" />
        </button>
      ),
      NextMonthButton: (props: any) => (
        <button {...props} onClick={handleNextClick}>
          <ChevronRight className="h-5 w-5" />
        </button>
      ),
      CaptionLabel: (p: any) => (
        <MonthCaption
          {...p}
          viewMode={viewMode}
          startYear={startYear}
          focusedDate={focusedDate}
          onCaptionClick={() => {
            setViewMode(current =>
              current === VIEW_MODE.DAY ? VIEW_MODE.YEAR : VIEW_MODE.DAY
            );
          }}
        />
      ),
      ...(viewMode !== VIEW_MODE.DAY && {
        MonthGrid: () => (
          <MonthGrid
            viewMode={viewMode}
            focusedDate={focusedDate}
            setFocusedDate={setFocusedDate}
            setViewMode={setViewMode}
            selectedDate={
              mode === MODE.SINGLE && selectedDate instanceof Date
                ? selectedDate
                : undefined
            }
            mappingOfYears={mappingOfYears}
          />
        ),

        DayButton: () => <></>,
      }),
    },
  };

  if (mode === MODE.SINGLE) {
    return {
      ...baseProps,
      mode: 'single',
      selected: selectedDate as Date | undefined,
      onSelect: handleSelect as (date: Date | undefined) => void,
    };
  }

  if (mode === MODE.RANGE) {
    return {
      ...baseProps,
      mode: 'range',
      required: false,
      selected: selectedDate as DateRange | undefined,
      onSelect: handleSelect as (range: DateRange | undefined) => void,
    };
  }

  if (mode === MODE.MULTIPLE) {
    return {
      ...baseProps,
      mode: 'multiple',
      selected: selectedDate as Date[] | undefined,
      onSelect: handleSelect as (dates: Date[] | undefined) => void,
    };
  }

  return baseProps;
}

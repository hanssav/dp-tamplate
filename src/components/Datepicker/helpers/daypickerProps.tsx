import { DateRange, DayPickerProps } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MonthCaption from '../component/MonthCaption';
import MonthGrid from '@components/Datepicker/component/MonthGrid';
import {
  CreateDayPickerPropsArgs,
  MODE,
  VIEW_MODE,
} from '@components/Datepicker/helpers/types';
import { DayButton } from '@components/Datepicker/component/DayButton';

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
  const modifierClassNames = {
    selected: 'bg-primary text-white hover:!bg-hover-primary rounded-full',
    today:
      'border border-primary rounded-full flex items-center justify-center',
    range_start:
      'rounded-full rounded-r bg-blue-100 text-white dark:bg-blue-700 dark:hover:bg-blue-600',
    range_end:
      'rounded-full rounded-l bg-blue-100 text-white dark:bg-blue-700 dark:hover:bg-blue-600',
    range_middle:
      'bg-blue-100 rounded-none dark:text-white dark:bg-blue-700 dark:hover:bg-blue-600',
  };

  const classNames = {
    day: 'cursor-pointer dark:hover:bg-gray-700 rounded-full',
    table: 'gap-2',
    cell: 'text-center',
  };

  const components = {
    DayButton: (props: any) => (
      <DayButton props={props} handleSelect={handleSelect} />
    ),
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
  };

  const baseProps = {
    month: focusedDate,
    onMonthChange: setFocusedDate,
    modifiersClassNames: modifierClassNames,
    className: 'w-full rounded bg-white dark:bg-gray-800 ',
    classNames: classNames,
    components: components,
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

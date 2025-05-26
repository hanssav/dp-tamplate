import React from 'react';
import { MonthGridProps } from 'react-day-picker';
import { format as formatFn } from 'date-fns';
import Button from '@components/Button';
import { twMerge } from 'tailwind-merge';

type Props = {
  viewMode: 'day' | 'month' | 'year';
  focusedDate: Date;
  setFocusedDate: (date: Date) => void;
  setViewMode: (mode: 'day' | 'month' | 'year') => void;
  selectedDate?: Date;
  mappingOfYears: number[];
};

const MonthGrid: React.FC<MonthGridProps & Props> = ({
  viewMode,
  focusedDate,
  setFocusedDate,
  setViewMode,
  selectedDate,
  mappingOfYears,
}) => {
  const renderYearGrid = () => {
    return (
      <div className="grid w-full grid-cols-4 gap-2">
        {mappingOfYears.map(year => {
          const isFocused = focusedDate.getFullYear() === year;
          const isSelected = selectedDate?.getFullYear() === year;

          return (
            <GridButton
              key={year}
              label={year}
              isSelected={isSelected}
              isFocused={isFocused}
              onClick={() => {
                const updatedDate = new Date(year, focusedDate.getMonth(), 1);
                setFocusedDate(updatedDate);
                setViewMode('month');
              }}
            />
          );
        })}
      </div>
    );
  };

  const renderMonthGrid = () => {
    const months = Array.from({ length: 12 }, (_, i) => i);

    return (
      <div className="grid w-full grid-cols-4 gap-2">
        {months.map(monthIndex => {
          const label = formatFn(new Date(0, monthIndex), 'MMM');
          const isFocused = focusedDate.getMonth() === monthIndex;
          const isSelected =
            selectedDate?.getMonth() === monthIndex &&
            selectedDate?.getFullYear() === focusedDate.getFullYear();

          return (
            <GridButton
              key={monthIndex}
              label={label}
              isSelected={isSelected}
              isFocused={isFocused}
              onClick={() => {
                const updatedDate = new Date(
                  focusedDate.getFullYear(),
                  monthIndex,
                  1
                );
                setFocusedDate(updatedDate);
                setViewMode('day');
              }}
            />
          );
        })}
      </div>
    );
  };

  if (viewMode === 'year') return renderYearGrid();
  if (viewMode === 'month') return renderMonthGrid();

  return null;
};

type GridButtonProps = {
  label: string | number;
  isSelected: boolean;
  isFocused: boolean;
  onClick: () => void;
};

const GridButton: React.FC<GridButtonProps> = ({
  label,
  isSelected,
  isFocused,
  onClick,
}) => {
  return (
    <Button
      color={isSelected ? 'primary' : 'basic'}
      size="md"
      className={twMerge(
        'rounded-lg',
        !isSelected &&
          isFocused &&
          'bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white'
      )}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default MonthGrid;

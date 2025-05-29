import React from 'react';
import { CaptionLabelProps } from 'react-day-picker';
import { format as formatFn } from 'date-fns';
import Button from '@components/UI/Button';
import { twMerge } from 'tailwind-merge';

export type MonthCaptionProps = CaptionLabelProps & {
  onCaptionClick?: () => void;
  viewMode?: 'day' | 'month' | 'year';
  startYear?: number;
  focusedDate: Date;
};

const MonthCaption: React.FC<MonthCaptionProps> = ({
  className,
  children,
  role,
  'aria-live': ariaLive,
  onCaptionClick,
  viewMode,
  startYear,
  focusedDate,
}) => {
  const convertYearLabel = () => {
    const strLabel = String(startYear);
    const match = strLabel.match(/\b\d{4}\b/);
    if (!match) return null;

    const start = parseInt(match[0], 10);
    const end = start + 23;
    return `${start} - ${end}`;
  };

  const yearsLabel = convertYearLabel();

  const convertDefaultLabel = () => {
    const str = String(children);
    const date = new Date(str);

    if (isNaN(date.getTime())) return '';

    const year = focusedDate.getFullYear();
    const month = formatFn(focusedDate, 'MMM');

    return `${month} ${year}`;
  };

  const label = convertDefaultLabel();

  return (
    <Button
      color="basic"
      size="md"
      className={twMerge(className)}
      role={role}
      aria-live={ariaLive}
      onClick={onCaptionClick}
    >
      {viewMode === 'year'
        ? yearsLabel
        : viewMode === 'month'
          ? label
          : children}
    </Button>
  );
};

export default MonthCaption;

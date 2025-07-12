'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as ReactDayPicker from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';
import 'react-day-picker/dist/style.css';
import { cn } from '@utils/cn';
import { formatDateValue } from '@utils/formatDate';

const DatePicker = Popover.Root;

const DatePickerTrigger = React.forwardRef<
  HTMLButtonElement,
  {
    value?: Date;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    { value, placeholder = 'Pick a date', className, disabled, ...props },
    ref
  ) => (
    <Popover.Trigger asChild>
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm text-gray-700 shadow-sm hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50',
          'dark:border-gray-600 dark:bg-transparent dark:text-white',
          className
        )}
        {...props}
      >
        <span>
          {value ? (
            formatDateValue(value)
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </span>
        <CalendarIcon className="ml-2 size-4 text-gray-500 dark:text-gray-300" />
      </button>
    </Popover.Trigger>
  )
);
DatePickerTrigger.displayName = 'DatePickerTrigger';

const DatePickerContent = React.forwardRef<
  HTMLDivElement,
  ReactDayPicker.DayPickerProps
>(({ className, ...props }, ref) => {
  return (
    <Popover.Portal>
      <Popover.Content
        ref={ref}
        align="start"
        side="bottom"
        className={cn(
          'z-50 mt-2 rounded-md border bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-white',
          className
        )}
      >
        <ReactDayPicker.DayPicker {...props} />
      </Popover.Content>
    </Popover.Portal>
  );
});

DatePickerContent.displayName = 'DatePickerContent';

export { DatePicker, DatePickerTrigger, DatePickerContent };

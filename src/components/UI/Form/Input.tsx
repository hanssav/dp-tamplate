import React from 'react';
import { cn } from '@utils/cn';

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ElementType;
  iconPosition?: 'start' | 'end';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, iconPosition = 'start', ...props }, ref) => {
    const hasIcon = !!Icon;
    const iconAtStart = iconPosition === 'start';

    return (
      <div className={cn('relative w-full')}>
        {hasIcon && iconAtStart && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="size-4" />
          </span>
        )}

        <input
          ref={ref}
          type={type}
          className={cn(
            'flex w-full rounded-md border border-gray-300 bg-white p-2 text-sm dark:border-gray-600 dark:bg-transparent dark:focus:bg-transparent',
            hasIcon && iconAtStart && 'pl-10',
            hasIcon && !iconAtStart && 'pr-10',
            className
          )}
          {...props}
        />

        {hasIcon && !iconAtStart && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="size-4" />
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };

import React from 'react';
import { cn } from '@utils/cn';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {

    console.log(props, 'props');
    return (
      <input
        ref={ref}
        className={cn(
          'flex w-full rounded-md border border-gray-300 bg-white p-2 text-sm dark:border-gray-600 dark:bg-transparent dark:focus:bg-transparent',
          className
        )}
        type={type}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };

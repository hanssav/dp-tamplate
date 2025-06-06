import { cn } from '@utils/cn';
import React from 'react';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'h-[7rem] w-full resize-y rounded-md border border-gray-300 bg-transparent dark:border-gray-600',
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
export { Textarea };

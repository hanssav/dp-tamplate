import React from 'react';
import * as RadioPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@utils/cn';

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioPrimitive.Root
      ref={ref}
      className={cn('flex flex-col gap-2.5', className)}
      {...props}
    />
  );
});
Radio.displayName = 'Radio';

const RadioGroupItem = React.forwardRef<
  HTMLButtonElement,
  RadioPrimitive.RadioGroupItemProps
>(({ className, ...props }, ref) => {
  return (
    <RadioPrimitive.Item
      ref={ref}
      className={cn(
        'size-6 rounded-full border border-gray-300 bg-transparent dark:border-gray-600',
        'flex items-center justify-center',
        'transition-colors',
        // Add visual checked state (important)
        'data-[state=checked]:border-primary',
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="relative block size-[10px] rounded-full bg-primary" />
    </RadioPrimitive.Item>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';

export { Radio, RadioGroupItem };

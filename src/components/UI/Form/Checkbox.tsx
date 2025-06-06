import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@utils/cn';
import { Check } from 'lucide-react';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked = false, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        checked ? 'bg-primary text-white' : 'bg-transparent',
        'flex size-[25px] items-center justify-center rounded border border-gray-300 dark:border-gray-600',
        className
      )}
      checked={checked}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };

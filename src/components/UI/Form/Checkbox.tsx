import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@utils/cn';
import { Check } from 'lucide-react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { FormLabel } from '@components/UI/Form';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        props.checked ? 'bg-primary text-white' : 'bg-transparent',
        'flex size-[25px] items-center justify-center rounded border border-gray-300 dark:border-gray-600',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

type Options = {
  value: string;
  label: string;
};
interface CheckboxGroupProps {
  name?: string;
  required?: React.ComponentPropsWithoutRef<
    typeof CheckboxPrimitive.Root
  >['required'];
  disabled?: React.ComponentPropsWithoutRef<
    typeof CheckboxPrimitive.Root
  >['disabled'];
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  options: Options[];
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ ...props }, ref) => {
    const {
      defaultValue = [],
      value: valueProp,
      onValueChange,
      options,
    } = props;

    const [value = [], setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange,
    });

    const handleChange =
      (val: string) => (checked: boolean | 'indeterminate') => {
        const updated =
          checked === true ? [...value, val] : value.filter(v => v !== val);
        setValue(updated);
      };

    return (
      <>
        {options.map(opt => (
          <div
            ref={ref}
            key={opt.id}
            className="flex flex-row-reverse items-center justify-end space-x-2 space-x-reverse"
          >
            <FormLabel>{opt.label}</FormLabel>
            <Checkbox
              key={opt.value}
              checked={value.includes(opt.value)}
              onCheckedChange={handleChange(opt.value)}
              value={opt.value}
            />
          </div>
        ))}
      </>
    );
  }
);
CheckboxGroup.displayName = 'CheckboxGroup';

export { Checkbox, CheckboxGroup };


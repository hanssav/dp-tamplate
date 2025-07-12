import React from 'react';
import { FormControl, FormLabel } from '@components/UI/Form';
import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
} from '@components/UI/Form/Datepicker';
import { BaseFormField } from '@datas/pages/formLayout/types';
import { ControllerRenderProps } from 'react-hook-form/dist/types';

interface DatePickerItemProps {
  item: BaseFormField;
  field: ControllerRenderProps;
}

export const DatePickerItem: React.FC<DatePickerItemProps> = ({
  item,
  field,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormLabel className="font-bold">{item.label}</FormLabel>
      <FormControl>
        <DatePicker open={open} onOpenChange={setOpen}>
          <DatePickerTrigger
            value={field.value}
            onClick={() => setOpen(prev => !prev)}
            placeholder={item.placeholder}
            disabled={item.disabled}
          />
          <DatePickerContent
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
          />
        </DatePicker>
      </FormControl>
    </>
  );
};

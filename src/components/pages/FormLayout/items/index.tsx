import React from 'react';
import { BaseFormField, SelectField } from '@datas/pages/formLayout/types';
import { ControllerRenderProps } from 'react-hook-form/dist/types';
import { TextareaItem } from './Textarea';
import { InputItem } from './Input';
import { SelectGroupItem } from './Select';
import { RadioItem } from './Radio';
import { CheckboxItem } from './Checkbox';
import { DatePickerItem } from './Datepicker';

interface FormContextType {
  item: BaseFormField;
  field: ControllerRenderProps;
}

export const RenderInput: React.FC<FormContextType> = ({ item, field }) => {
  if (!item?.type) return null;

  switch (item.type) {
    case 'datepicker':
      return <DatePickerItem item={item} field={field} />;
    case 'checkbox':
      return <CheckboxItem item={item} field={field} />;
    case 'textarea':
      return <TextareaItem item={item} field={field} />;
    case 'radio':
      return <RadioItem item={item} field={field} />;
    case 'select':
      return <SelectGroupItem item={item as SelectField} field={field} />;
    default:
      return <InputItem item={item} field={field} />;
  }
};

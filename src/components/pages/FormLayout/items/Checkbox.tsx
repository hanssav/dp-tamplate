import { FormControl, FormLabel } from '@components/UI/Form';
import { Checkbox, CheckboxGroup } from '@components/UI/Form/Checkbox';
import { cn } from '@utils/cn';
import {
  SingleCheckboxField,
  CheckboxGroupField,
} from '@datas/pages/formLayout/types';
import { ControllerRenderProps } from 'react-hook-form';
import { useFormLayout } from '../../../../datas/pages/formLayout/FormContextLayout';

interface Props {
  item: SingleCheckboxField | CheckboxGroupField;
  field: ControllerRenderProps;
}

const isCheckboxGroup = (
  fieldItem: SingleCheckboxField | CheckboxGroupField
): fieldItem is CheckboxGroupField => {
  return (fieldItem as CheckboxGroupField).options !== undefined;
};

export const CheckboxItem = ({ item, field }: Props) => {
  const { variant } = useFormLayout();

  const options = isCheckboxGroup(item)
    ? item.options.map(optionItem => ({ ...optionItem, value: optionItem.id }))
    : [];

  return (
    <div
      className={cn(
        !isCheckboxGroup(item)
          ? 'flex flex-row-reverse items-center justify-end space-x-2 space-x-reverse'
          : 'space-y-2'
      )}
    >
      <FormLabel>{item.label}</FormLabel>
      <FormControl>
        {isCheckboxGroup(item) ? (
          <CheckboxGroup
            options={options}
            onValueChange={field.onChange}
            {...field}
          />
        ) : (
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
            defaultChecked
            id={`${item.id}-${variant}`}
          />
        )}
      </FormControl>
    </div>
  );
};

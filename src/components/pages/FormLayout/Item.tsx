import { useFormLayout } from '@components/pages/FormLayout';
import { FormControl, FormLabel } from '@components/UI/Form';
import { Checkbox, CheckboxGroup } from '@components/UI/Form/Checkbox';
import { Input } from '@components/UI/Form/Input';
import { Textarea } from '@components/UI/Form/TextArea';
import {
  BaseFormField,
  CheckboxGroupField,
  CheckboxItem as CheckboxOption,
  SingleCheckboxField,
} from '@datas/pages/formLayout/config';
import { cn } from '@utils/cn';
import { ControllerRenderProps } from 'react-hook-form/dist/types';

interface FormContextType {
  item: BaseFormField;
  field: ControllerRenderProps;
}

interface OptionsType extends CheckboxOption {
  value: CheckboxOption['id'];
}

const isCheckboxGroup = (
  fieldItem: SingleCheckboxField | CheckboxGroupField
): fieldItem is CheckboxGroupField => {
  return (fieldItem as CheckboxGroupField).options !== undefined;
};

const CheckboxItem = ({
  item,
  field,
}: {
  item: SingleCheckboxField | CheckboxGroupField;
  field: FormContextType['field'];
}) => {
  const { variant } = useFormLayout();
  
  const options = isCheckboxGroup(item)
    ? item.options.map(optionItem => {
        const newOption: OptionsType = {
          ...optionItem,
          value: optionItem.id,
        };
        return newOption;
      })
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
CheckboxItem.displayName = 'CheckboxItem';

const InputItem = ({ item, field }: FormContextType) => {
  const { variant } = useFormLayout();
  return (
    <>
      <FormLabel className="font-bold">{item.label}</FormLabel>
      <FormControl>
        <Input
          id={`${item.id}-${variant}`}
          type={item.type}
          placeholder={item.placeholder}
          {...field}
        />
      </FormControl>
    </>
  );
};
InputItem.displayName = 'InputItem';

const renderInput = ({ item, field }: FormContextType) => {
  if (!item?.type) return;
  switch (item.type) {
    case 'checkbox':
      return <CheckboxItem item={item} field={field} />;
    case 'textarea':
      return (
        <>
          <FormLabel>{item.label}</FormLabel>
          <Textarea {...field} />
        </>
      );
    default:
      return <InputItem item={item} field={field} />;
  }
};

export { CheckboxItem, InputItem, renderInput };

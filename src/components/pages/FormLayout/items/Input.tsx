import { FormControl, FormLabel } from '@components/UI/Form';
import { Input } from '@components/UI/Form/Input';
import { BaseFormField } from '@datas/pages/formLayout/types';
import { ControllerRenderProps } from 'react-hook-form';
import { useFormLayout } from '../../../../datas/pages/formLayout/FormContextLayout';

interface Props {
  item: BaseFormField;
  field: ControllerRenderProps;
}

export const InputItem = ({ item, field }: Props) => {
  const { variant } = useFormLayout();
  return (
    <>
      <FormLabel className="font-bold">{item.label}</FormLabel>
      <FormControl>
        <Input
          id={`${item.id}-${variant}`}
          type={item.type}
          placeholder={item.placeholder}
          disabled={item.disabled}
          {...field}
        />
      </FormControl>
    </>
  );
};

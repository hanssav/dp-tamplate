import { Textarea } from '@components/UI/Form/TextArea';
import { FormLabel } from '@components/UI/Form';
import { BaseFormField } from '@datas/pages/formLayout/types';
import { ControllerRenderProps } from 'react-hook-form';

interface Props {
  item: BaseFormField;
  field: ControllerRenderProps;
}

export const TextareaItem = ({ item, field }: Props) => {
  return (
    <>
      <FormLabel>{item.label}</FormLabel>
      <Textarea {...field} />
    </>
  );
};

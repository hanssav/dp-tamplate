import { FormControl, FormLabel } from '@components/UI/Form';
import { Radio, RadioGroupItem } from '@components/UI/Form/Radio';
import { ControllerRenderProps } from 'react-hook-form';

interface Props {
  item: any;
  field: ControllerRenderProps;
}

export const RadioItem = ({ item, field }: Props) => {
  return (
    <FormControl>
      <Radio
        onValueChange={field.onChange}
        value={field.value}
        className="space-y-2"
      >
        {item.options?.map((option: any, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option.id} id={option.id} />
            <FormLabel htmlFor={option.id}>{option.label}</FormLabel>
          </div>
        ))}
      </Radio>
    </FormControl>
  );
};

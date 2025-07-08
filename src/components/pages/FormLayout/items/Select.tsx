import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@components/UI/Form/Select';
import { FormControl, FormLabel } from '@components/UI/Form';
import { Options, SelectField } from '@datas/pages/formLayout/types';
import { ControllerRenderProps } from 'react-hook-form';

interface Props {
  item: SelectField;
  field: ControllerRenderProps;
}

export const SelectGroupItem = ({ item, field }: Props) => {
  return (
    <>
      <FormLabel className="font-bold">{item.label}</FormLabel>
      <FormControl>
        <Select
          defaultValue={field.value}
          onValueChange={field.onChange}
          value={field.value}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose Options" />
          </SelectTrigger>
          <SelectContent>
            {item.options?.map((option: Options, index: number) => (
              <SelectItem key={index} value={option.id}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
    </>
  );
};

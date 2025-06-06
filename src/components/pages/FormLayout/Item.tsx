import { FormControl, FormLabel } from '@components/UI/Form';
import { Checkbox } from '@components/UI/Form/Checkbox';
import { Input } from '@components/UI/Form/Input';

const CheckboxItem = ({ item, field, variant }: any) => {
  return (
    <div className="flex flex-row-reverse items-center justify-end space-x-2 space-x-reverse">
      <FormLabel>{item.label}</FormLabel>
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
          defaultChecked
          id={`${item.id}-${variant}`}
        />
      </FormControl>
    </div>
  );
};
CheckboxItem.displayName = 'CheckboxItem';

const InputItem = ({ item, field, variant }: any) => {
  return (
    <>
      <FormLabel>{item.label}</FormLabel>
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

export { CheckboxItem, InputItem };

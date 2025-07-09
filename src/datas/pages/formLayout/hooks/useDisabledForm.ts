import { zodResolver } from '@hookform/resolvers/zod';
import { disabledForm } from '../schema/disabledForm';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const disabledFormSchema = disabledForm.pick({
  name: true,
  email: true,
  password: true,
});
type DisabledFormNameSchema = z.infer<typeof disabledFormSchema>;

const useDisabledForm = () => {
  const form = useForm<DisabledFormNameSchema>({
    resolver: zodResolver(disabledFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: DisabledFormNameSchema) => {
    return data;
  };

  return { form, onSubmit };
};

export { useDisabledForm, disabledFormSchema, type DisabledFormNameSchema };

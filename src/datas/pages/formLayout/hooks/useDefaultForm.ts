import { defaultFormSchema } from '@datas/pages/formLayout/schema/defaultForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const defaultFormNameSchema = defaultFormSchema.pick({
  'default-text': true,
  email: true,
  password: true,
  textarea: true,
  'checkbox-group': true,
  'checkbox-group-2': true,
});
export type DefaultFormNameSchema = z.infer<typeof defaultFormNameSchema>;

export function useDefaultForm() {
  const form = useForm<DefaultFormNameSchema>({
    resolver: zodResolver(defaultFormNameSchema),
    defaultValues: {
      'default-text': 'George Deo',
      email: '',
      password: '',
      textarea: '',
      'checkbox-group': [],
      'checkbox-group-2': [],
    },
  });

  const onSubmit = (data: DefaultFormNameSchema) => {
    return data;
  };

  return { form, onSubmit };
}

import { basicHeaderForm } from '@datas/pages/formLayout/schema/basicHeaderForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const headerFormNameSchema = basicHeaderForm.pick({
  firstName: true,
  lastName: true,
  gender: true,
  dateOfBirth: true,
  membership: true,
  street: true,
  city: true,
  state: true,
  postCode: true,
  country: true,
});
export type HeaderFormNameSchema = z.infer<typeof headerFormNameSchema>;

export function useBasicHeaderForm() {
  const form = useForm<HeaderFormNameSchema>({
    resolver: zodResolver(headerFormNameSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      membership: '',
      street: '',
      city: '',
      state: '',
      postCode: '',
      country: '',
    },
  });

  const onCancel = () => {
    form.reset();
  };

  const onSubmit = (data: HeaderFormNameSchema) => {
    return data;
  };

  return { form, onSubmit, onCancel };
}

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ordinaryFormSchema } from '@datas/pages/formLayout/schema/ordinaryForm';
import { z } from 'zod';

export const ordinaryNameSchema = ordinaryFormSchema.pick({
  email: true,
  password: true,
  check: true,
});

export type OrdinaryFormNameSchema = z.infer<typeof ordinaryNameSchema>;
export function useOrdinaryForm() {
  const form = useForm<OrdinaryFormNameSchema>({
    resolver: zodResolver(ordinaryNameSchema),
    defaultValues: {
      email: '',
      password: '',
      check: false,
    },
  });

  const onSubmit = (data: OrdinaryFormNameSchema) => {
    return data;
  };

  return { form, onSubmit };
}

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ordinaryFormSchema } from '@datas/pages/formLayout/schema/ordinaryForm';
import { z } from 'zod';

export const inputVariantFormSchema = ordinaryFormSchema.pick({
  email: true,
});

export type InputVariantFormNameSchema = z.infer<typeof inputVariantFormSchema>;
export function useInputVariantForm() {
  const form = useForm<InputVariantFormNameSchema>({
    resolver: zodResolver(inputVariantFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: InputVariantFormNameSchema) => {
    console.log('Input variant form submitted:', data);
  };

  return { form, onSubmit };
}

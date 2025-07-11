import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconFormSchema, iconFormSchema } from '../schema/iconForm';

export const useLeftIconForm = () => {
  const form = useForm<IconFormSchema>({
    resolver: zodResolver(iconFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
    },
  });

  const onCancel = () => (form.clearErrors(), form.reset());
  const onSubmit = (data: IconFormSchema) => data;

  return { form, onSubmit, onCancel };
};

export const useRightIconForm = () => {
  const form = useForm<IconFormSchema>({
    resolver: zodResolver(iconFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
    },
  });

  const onCancel = () => (form.clearErrors(), form.reset());
  const onSubmit = (data: IconFormSchema) => data;

  return { form, onSubmit, onCancel };
};

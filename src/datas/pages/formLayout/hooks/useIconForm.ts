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

  const onSubmit = (data: IconFormSchema) => {
    return data;
  };

  return { form, onSubmit };
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

  const onSubmit = (data: IconFormSchema) => {
    return data;
  };

  return { form, onSubmit };
};

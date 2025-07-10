import { z } from 'zod';

const baseIconForm = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20),
  confirmPassword: z.string().min(8).max(20),
  rememberMe: z.boolean().optional(),
});

const pickedSchema = baseIconForm.pick({
  username: true,
  email: true,
  password: true,
  confirmPassword: true,
  rememberMe: true,
});

const iconFormSchema = pickedSchema.refine(
  data => data.password === data.confirmPassword,
  {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  }
);

type IconFormSchema = z.infer<typeof iconFormSchema>;

export { iconFormSchema, type IconFormSchema };

import { z } from 'zod';

export const ordinaryFormSchema = z.object({
  username: z.string().min(3).max(20),
  //set validation schema with default error messange
  email: z.string().email(),
  //set validation schema with custom error messange
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters'),
  check: z.boolean(),
});

export type OrdinaryFormSchema = z.infer<typeof ordinaryFormSchema>;

export const defaultFormSchema = z.object({
  'default-text': z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(20),
  textarea: z.string(),
});

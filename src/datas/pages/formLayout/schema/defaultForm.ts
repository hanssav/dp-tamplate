import { z } from 'zod';

export const defaultFormSchema = z.object({
  'default-text': z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(20),
  textarea: z.string(),
  'checkbox-group': z.array(z.string()),
  // 'checkbox-group-2': z.array(z.string()),
  'checkbox-group-2': z.unknown(),
});

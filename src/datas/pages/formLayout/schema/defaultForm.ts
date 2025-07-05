import { z } from 'zod';

const defaultFormSchema = z.object({
  'default-text': z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(20),
  textarea: z.string(),
  'checkbox-group': z.array(z.string()),
  'radio-group': z.string(),
  select: z.string(),
});

const basicHeaderForm = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  dateOfBirth: z.string(),
  membership: z.boolean(),
});

export { basicHeaderForm, defaultFormSchema };

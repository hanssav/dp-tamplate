import { z } from 'zod';

const basicHeaderForm = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string(),
  gender: z.string(),
  dateOfBirth: z.string(),
  membership: z.string(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postCode: z.string().optional(),
  country: z.string().optional(),
});
export { basicHeaderForm };

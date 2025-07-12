import { z } from 'zod';

const basicHeaderForm = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  gender: z.string(),
  dateOfBirth: z.date().nullable(),
  membership: z.string(),
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postCode: z.string().optional(),
  country: z.string().optional(),
});
export { basicHeaderForm };

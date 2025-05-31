import Box from '@components/UI/Box';
import Button from '@components/UI/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/UI/Form';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components/UI/Input';
import ToggleButtonGroup from '@components/UI/ToggleButtonGroup';
import { Datepicker } from 'flowbite-react';
import { Menu } from 'lucide-react';
import DashboardLayout from '../components/UI/DashboardLayout';
import { z } from 'zod';
import { useNavigate } from 'react-router';

export const onboardingSchema = z.object({
  username: z.string().min(3).max(20),
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  password: z.string().min(8).max(20),
  repeatPassword: z.string().min(8).max(20),
  terms: z.boolean().refine(data => data),
});

const onboardingNameSchema = onboardingSchema.pick({
  firstName: true,
  lastName: true,
});

type OnboardingNameSchema = z.infer<typeof onboardingNameSchema>;

const Home = () => {
  const navigate = useNavigate();

  const form = useForm<OnboardingNameSchema>({
    resolver: zodResolver(onboardingNameSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (data: OnboardingNameSchema) => {
    console.log(data);
    // navigate('/404');
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p className="my-4">This is the main content of the dashboard.</p>

      <div className="flex gap-x-4">
        <Button color="primary" onClick={() => {}}>
          Primary Button
        </Button>

        <Button color="secondary" onClick={() => {}}>
          Secondary Button
        </Button>

        <Button color="light" onClick={() => {}} rounded="md">
          <Menu size={20} />
        </Button>
        <ToggleButtonGroup
          options={['Bold', 'Italic', 'Underline']}
          multiple={false}
        />
        <Datepicker />
      </div>

      <Box className="my-4">
        <h2 className="text-lg font-semibold">Form Context</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[300px] space-y-8"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder="John" {...field} />
                  </FormControl>
                  <FormDescription>This is your first name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input id="lastName" placeholder="Doe" {...field} />
                  </FormControl>
                  <FormDescription>This is your last name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Next</Button>
          </form>
        </Form>
      </Box>
    </DashboardLayout>
  );
};

export default Home;

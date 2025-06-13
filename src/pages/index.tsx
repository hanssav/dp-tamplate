import Box from '@components/UI/Box';
import Button from '@components/UI/Button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@components/UI/Form';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components/UI/Input';
import ToggleButtonGroup from '@components/UI/ToggleButtonGroup';
import { Datepicker } from 'flowbite-react';
import { Menu } from 'lucide-react';
import DashboardLayout from '../components/UI/DashboardLayout';
import { z } from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/UI/Form/Select';
import { Radio, RadioGroupItem } from '@components/UI/Form/Radio';

// Define positions as a readonly tuple
export const positions = [
  'Software Engineer',
  'Product Manager',
  'Designer',
  'Data Scientist',
] as const;

// Optional: Also define roles as enum
export const roles = ['editor', 'viewer'] as const;

// Zod schema using enums
export const onboardingSchema = z.object({
  username: z.string().min(3).max(20),
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  password: z.string().min(8).max(20),
  repeatPassword: z.string().min(8).max(20),
  terms: z.boolean().refine(data => data),
  role: z.enum(roles),
  position: z.enum(positions),
});

// Schema for just name-related fields
export const onboardingNameSchema = onboardingSchema.pick({
  firstName: true,
  lastName: true,
  role: true,
  position: true,
});

// Type for use in form
export type OnboardingNameSchema = z.infer<typeof onboardingNameSchema>;

const Home = () => {
  // we can use navigate from useNavigate from reactrouter
  // const navigate = useNavigate();

  const form = useForm<OnboardingNameSchema>({
    resolver: zodResolver(onboardingNameSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      role: 'editor',
      position: 'Software Engineer',
    },
  });

  const onSubmit = (data: OnboardingNameSchema) => data;

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
                    <Input id="firstName" placeholder="John" {...field} />
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
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="viewer">Viewer</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Select your role.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Radio
                      onValueChange={field.onChange} // ✔️ Bind form updates
                      value={field.value} // ✔️ Controlled value
                      className="space-y-2"
                    >
                      {positions.map(pos => (
                        <div key={pos} className="flex items-center space-x-2">
                          <RadioGroupItem value={pos} id={pos} />{' '}
                          {/* ✔️ Use value that matches Zod */}
                          <FormLabel htmlFor={pos}>{pos}</FormLabel>
                        </div>
                      ))}
                    </Radio>
                  </FormControl>
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

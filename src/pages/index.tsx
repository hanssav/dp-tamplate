import Button from '@components/UI/Button';
import ToggleButtonGroup from '@components/UI/ToggleButtonGroup';
import { Datepicker } from 'flowbite-react';
import { Menu } from 'lucide-react';
import DashboardLayout from '../components/UI/DashboardLayout';

const Home = () => {
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
    </DashboardLayout>
  );
};

export default Home;

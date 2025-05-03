import { Menu } from 'lucide-react';
import Button from '../components/Button';
import DashboardLayout from '../components/DashboardLayout';

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

        <Button color="light" onClick={() => {}} rounded={true}>
          <Menu size={20} />
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Home;

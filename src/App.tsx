import Button from './components/Button';
import DashboardLayout from './components/DashboardLayout';
import { HiMenu } from 'react-icons/hi';

const App = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p className="my-4">This is the main content of the dashboard.</p>

      <div className="flex gap-x-4">
        <Button color="primary" onClick={() => console.log('Button Clicked!')}>
          Primary Button
        </Button>

        <Button
          color="secondary"
          onClick={() => console.log('Button Clicked!')}
        >
          Secondary Button
        </Button>

        <Button
          color="light"
          onClick={() => console.log('Button Clicked!')}
          rounded={true}
        >
          <HiMenu size={20} />
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default App;

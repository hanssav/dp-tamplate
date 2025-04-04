import { HiMenu } from 'react-icons/hi';
import Button from '../components/Button';
import Col from '../components/Col';
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
          <HiMenu size={20} />
        </Button>
      </div>

      <Col col="col-6" className="my-5">
        <div className="flex items-center justify-center bg-orange-400 px-2">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-orange-400 px-2">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
      </Col>
    </DashboardLayout>
  );
};

export default Home;

import { reveneueUpdateChartOptions } from '@datas/pages/charts/options/revenueUpdateChartOptions';
import ReactApexChart from 'react-apexcharts';
import { HiMenu } from 'react-icons/hi';
import Button from '../components/Button';
import DashboardLayout from '../components/DashboardLayout';

const Home = () => {
  const series = [
    {
      name: 'Footware',
      data: [20, 30, 40, 50, 60, 70],
    },
    {
      name: 'Fashionware',
      data: [-20, -30, -10, -40, -15, -25],
    },
  ];

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
      <ReactApexChart
        options={reveneueUpdateChartOptions}
        series={series}
        type="bar"
        height={350}
      />
    </DashboardLayout>
  );
};

export default Home;

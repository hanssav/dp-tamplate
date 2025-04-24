import { reveneueUpdateChartOptions } from '@datas/pages/charts/options/revenueUpdateChartOptions';
import { ApexOptions } from 'apexcharts';
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

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ['#7599FF', '#64C8FF'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          colors: '#78909C',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => val.toFixed(0),
        style: {
          colors: '#78909C',
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      markers: {
        fillColors: ['#7599FF', '#64C8FF'],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
    grid: {
      show: true,
      borderColor: '#e0e0e0',
    },
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

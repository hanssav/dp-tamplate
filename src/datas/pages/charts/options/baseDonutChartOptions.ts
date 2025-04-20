import { ApexOptions } from 'apexcharts';

export const baseDonutChartOptions: ApexOptions = {
  chart: {
    id: 'donut-charts',
    background: 'transparant',
    type: 'donut',
    height: 250,
  },
  grid: {
    padding: {
      top: 20,
      right: 10,
      bottom: 20,
      left: 10,
    },
  },
};

import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';

export const followerChartOptions: ApexOptions = createChartOptions('area', {
  chart: {
    id: 'followers-chart',
  },
  colors: ['#4CAF50'],
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
});

export const followerChartSeries = [
  {
    name: 'Followers',
    data: [0, 15, 11, 24, 20, 20, 30, 20],
  },
];

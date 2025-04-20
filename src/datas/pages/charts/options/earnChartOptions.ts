import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';

export const earnChartOptions: ApexOptions = createChartOptions('area', {
  chart: {
    id: 'earn-chart',
  },
  colors: ['#34D399'],
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
});

export const earnChartSeries = [
  {
    name: 'Earned',
    data: [0, 3, 1, 2, 8, 1, 5, 1],
  },
];

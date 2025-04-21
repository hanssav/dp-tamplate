import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const earnChartOptions: ApexOptions = createChartOptions('area', {
  chart: {
    id: 'earn-chart',
  },
  colors: ['#34D399'],
  tooltip: {
    enabled: true,
    theme: THEME_MODE_CONSTANT.DARK,
  },
});

export const earnChartSeries = [
  {
    name: 'Earned',
    data: [0, 3, 1, 2, 8, 1, 5, 1],
  },
];

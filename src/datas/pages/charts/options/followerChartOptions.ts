import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const followerChartOptions: ApexOptions = createChartOptions('area', {
  chart: {
    id: 'followers-chart',
    height: 100,
  },
  colors: ['#4CAF50'],
  tooltip: {
    enabled: true,
    theme: THEME_MODE_CONSTANT.DARK,
  },
});

export const followerChartSeries = [
  {
    name: 'Followers',
    data: [0, 15, 11, 24, 20, 20, 30, 20],
  },
];

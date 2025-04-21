import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { MONTHLY_EARNING_ID } from '@datas/pages/charts/constants';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const monthlyEarningrChartOptions: ApexOptions = createChartOptions(
  'area',
  {
    chart: {
      id: MONTHLY_EARNING_ID,
    },
    colors: ['#4CAF50'],
    tooltip: {
      enabled: true,
      theme: THEME_MODE_CONSTANT.DARK,
    },
    stroke: {
      curve: 'smooth',
    },
  }
);

export const monthlyEarningChartSeries = [
  {
    name: 'Followers',
    data: [0, 15, 11, 24, 20, 20, 30, 20],
  },
];

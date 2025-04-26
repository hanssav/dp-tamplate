import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const customerChartOptions: ApexOptions = createChartOptions('area', {
  chart: {
    id: 'customer-chart',
    height: 140,
  },
  tooltip: {
    enabled: true,
    theme: THEME_MODE_CONSTANT.DARK,
  },
});

export const customerChartSeries = [
  {
    name: 'Customer',
    data: [0, 15, 11, 24, 20, 20, 30, 20],
  },
];

import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const totalChartOptions: ApexOptions = createChartOptions('bar', {
  chart: {
    id: 'total-bar-chart',
    background: 'transparent',
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      isDumbbell: true,
    },
  },
  tooltip: {
    enabled: true,
    theme: THEME_MODE_CONSTANT.DARK,
  },
});

export const totalChartSeries = [
  {
    name: 'Earned',
    data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
  },
];

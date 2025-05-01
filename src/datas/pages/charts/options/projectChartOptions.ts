import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const propjectChartOptions: ApexOptions = createChartOptions('bar', {
  chart: {
    id: 'project-chart',
    background: 'transparent',
    // height: 140,
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

export const projectChartSeries = [
  {
    name: 'Earned',
    data: [4, 10, 9, 7, 9, 10],
  },
];

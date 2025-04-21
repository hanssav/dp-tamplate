import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const viewBarCharColor = [
  '#dbeafe',
  '#dbeafe',
  '#44b9f7',
  '#dbeafe',
  '#dbeafe',
];

export const viewChartOptions: ApexOptions = createChartOptions('bar', {
  chart: {
    id: 'views-bar-chart',
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
  colors: viewBarCharColor,
});

export const viewsChartSeries = [
  {
    name: 'Views',
    data: [20, 15, 30, 25, 10, 18, 20],
  },
];

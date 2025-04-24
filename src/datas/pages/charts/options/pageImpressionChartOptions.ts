import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { THEME_MODE_CONSTANT } from '@constant/index';
import { PAGE_IMPRESSION_ID } from '@datas/pages/charts/constants';

export const pageImpressionChartOptions: ApexOptions = createChartOptions(
  'bar',
  {
    chart: {
      id: PAGE_IMPRESSION_ID,
      height: 130,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '40%',
      },
    },
    tooltip: {
      enabled: true,
      theme: THEME_MODE_CONSTANT.DARK,
    },
    grid: {
      padding: {
        left: 0,
        right: 50,
      },
    },
  }
);

export const pageImpressionChartSeries = [
  {
    name: 'Page Impression',
    data: [5, 4, 6, 4, 5],
  },
];

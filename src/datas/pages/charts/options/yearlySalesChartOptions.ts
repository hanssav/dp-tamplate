import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { MONTH_DATAS, YEARLY_SALES_ID } from '@datas/pages/charts/constants';
import { THEME_MODE_CONSTANT } from '@constant/index';

export const yearlyChartSeries = [
  {
    name: 'PRODUCT A',
    data: [2.5, 3.7, 5.2, 2.6, 1.9, 2.5],
  },
];

export const yearlyChartOptions: ApexOptions = createChartOptions('bar', {
  chart: {
    id: YEARLY_SALES_ID,
    type: 'bar',
    height: 300,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    theme: THEME_MODE_CONSTANT.DARK,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      columnWidth: '40%',
    },
  },
  xaxis: {
    categories: MONTH_DATAS.slice(0, yearlyChartSeries[0].data.length),
    position: 'bottom',
    axisTicks: {
      show: true,
      color: '#78909C',
    },
    labels: {
      show: true,
      style: {
        colors: '#78909C',
        fontSize: '12px',
      },
    },
  },
  fill: {
    opacity: 1,
  },
  grid: {
    padding: {
      top: 10,
      right: 30,
      bottom: 50,
      left: 30,
    },
  },
});

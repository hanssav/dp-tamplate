import { ApexOptions } from 'apexcharts';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';

export const incomeChartOptions: ApexOptions = createChartOptions('bar', {
  chart: {
    id: 'income-chart',
    type: 'bar',
    height: 250,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      columnWidth: '20%',
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '01/01/2011 GMT',
      '01/02/2011 GMT',
      '01/03/2011 GMT',
      '01/04/2011 GMT',
      '01/05/2011 GMT',
      '01/06/2011 GMT',
    ],
  },
  fill: {
    opacity: 1,
  },
  grid: {
    padding: {
      top: 10,
      right: 20,
      bottom: 20,
      left: 20,
    },
  },
});

export const incomeChartSeries = [
  {
    name: 'PRODUCT A',
    data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
  },
  {
    name: 'PRODUCT B',
    data: [-2.8, -1.1, -3, -1.5, -1.9, -2.8],
  },
];

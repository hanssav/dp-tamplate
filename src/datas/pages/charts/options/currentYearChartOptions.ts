import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { ApexOptions } from 'apexcharts';

export const currentYearChartOptions: ApexOptions = createChartOptions(
  'donut',
  {
    chart: {
      id: 'current-year-chart',
    },
    series: [30, 40, 30],
    colors: ['#1E90FF', '#FFFFFF', '#38B2AC'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#1E90FF',
              // formatter: () => '$98,260',
            },
            total: {
              show: true,
              formatter: () => '$98,260',
              showAlways: false,
              color: '#000000',
              // label: 'Total',
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
    labels: ['series-1', 'series-2', 'series-3'],
  }
);

export const currentYearChartDatas = [55, 55, 55];

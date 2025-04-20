import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { ApexOptions } from 'apexcharts';

export const yearlyBackupChartOptions: ApexOptions = createChartOptions(
  'donut',
  {
    chart: {
      id: 'yearly-backup-chart',
      height: 150,
    },
    series: [30, 40, 30],
    colors: ['#1E90FF', '#E5EDFF', '#F1F5F9'],
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
          size: '75',
          labels: {
            show: false,
            name: {
              show: false,
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
    grid: {
      padding: {
        top: 20,
        right: 40,
        bottom: 20,
        left: 0,
      },
    },
    labels: ['series-1', 'series-2', 'series-3'],
  }
);

export const yearlyBackupChartSeries = [55, 55, 55];

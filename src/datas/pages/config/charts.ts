import {
  areaChartsOptions,
  chartContent,
  followerChartSeries,
} from './../charts/datas/charts';
import { SectionContent } from '@datas/pages/config/_types';

export const charts: SectionContent[] = [
  {
    col: 'col-4',
    variant: 'chart',
    data: chartContent,
  },
  {
    col: 'col-1',
    multipleRow: true,
    data: [
      {
        variant: 'default',
        type: 'parent',
        title: 'Current Value',
        button: [
          { color: 'primary', label: 'Buy', onclick: () => {} },
          { color: 'secondary', label: 'Sell', onclick: () => {} },
        ],
        child: {
          type: 'child',
          col: 'col-3',
          data: [
            {
              config: {
                valuePosition: 'up',
                chartPosition: 'down',
              },
              variant: 'chart',
              title: 'Cek title di sini ',
              value: 2545,
              percentage: '+1.20%',
              percentageColor: 'text-green-400',
              chartColor: ['#3b82f6'],
              series: followerChartSeries,
              options: areaChartsOptions,
              span: 1,
            },
            {
              config: {
                valuePosition: 'up',
                chartPosition: 'down',
              },
              variant: 'chart',
              title: 'Cek xxxxx ',
              value: 2545,
              percentage: '+1.20%',
              percentageColor: 'text-green-400',
              chartColor: ['#3b82f6'],
              series: followerChartSeries,
              options: areaChartsOptions,
              span: 1,
            },
            {
              config: {
                valuePosition: 'up',
                chartPosition: 'down',
              },
              variant: 'chart',

              title: 'Cek skajdfklsjakljdkl ',
              value: 2545,
              percentage: '+1.20%',
              percentageColor: 'text-green-400',
              chartColor: ['#3b82f6'],
              series: followerChartSeries,
              options: areaChartsOptions,
              span: 1,
            },
          ],
        },
      },
    ],
  },
];

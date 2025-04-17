import {
  areaChartsOptions,
  barChartsOptions,
  earnChartSeries,
  followerChartSeries,
  totalChartSeries,
  viewBarCharColor,
  viewsChartSeries,
} from '@datas/pages/charts/datas/charts';
import { SectionContent } from '@datas/pages/config';

export const chartContent: SectionContent[] = [
  {
    config: {
      valuePosition: 'up',
      chartPosition: 'down',
    },
    title: 'Followers',
    value: 2545,
    percentage: '+1.20%',
    percentageColor: 'text-green-400',
    chartColor: ['#3b82f6'],
    series: followerChartSeries,
    options: areaChartsOptions,
    span: 1,
  },
  {
    title: 'Views',
    value: 2545,
    percentage: '-4.150%',
    percentageColor: 'text-red-400',
    chartColor: viewBarCharColor,
    series: viewsChartSeries,
    options: barChartsOptions,
    span: 1,
  },
  {
    title: 'Earned',
    value: 2445,
    percentage: '+2.20%',
    percentageColor: 'text-green-400',
    chartColor: ['#3b82f6'],
    series: earnChartSeries,
    options: areaChartsOptions,
    span: 1,
  },
  {
    title: 'Total Earning',
    value: '$78,298',
    percentageColor: 'text-green-400',
    chartColor: ['#44b9f7'],
    series: totalChartSeries,
    options: barChartsOptions,
    span: 1,
    config: {
      valuePosition: 'down',
      chartPosition: 'down',
    },
  },
];

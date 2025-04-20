import { currentYearChartDatas } from './../options/currentYearChartOptions';
import { currentYearChartOptions } from '@datas/pages/charts/options/currentYearChartOptions';
import {
  earnChartOptions,
  earnChartSeries,
} from '@datas/pages/charts/options/earnChartOptions';
import {
  expanceChartOptions,
  expanceChartSeries,
} from '@datas/pages/charts/options/expanceChartOptions';
import {
  followerChartOptions,
  followerChartSeries,
} from '@datas/pages/charts/options/followerChartOptions';
import {
  incomeChartOptions,
  incomeChartSeries,
} from '@datas/pages/charts/options/incomeChartOptions';
import {
  totalChartOptions,
  totalChartSeries,
} from '@datas/pages/charts/options/totalChartOptions';
import {
  viewBarCharColor,
  viewChartOptions,
  viewsChartSeries,
} from '@datas/pages/charts/options/viewChartOptions';
import { SectionContent } from '@datas/pages/config';

export const chartContentDatas1: SectionContent[] = [
  {
    config: {
      valuePosition: 'up',
      chartPosition: 'down',
    },
    title: 'Followers',
    value: 2545,
    percentage: '+1.20%',
    percentageColor: 'text-green-400 dark:text-green-400',
    chartColor: ['#3b82f6'],
    series: followerChartSeries,
    options: followerChartOptions,
    span: 1,
  },
  {
    title: 'Views',
    value: 2545,
    percentage: '-4.150%',
    percentageColor: 'text-red-400 dark:text-red-400',
    chartColor: viewBarCharColor,
    series: viewsChartSeries,
    options: viewChartOptions,
    span: 1,
  },
  {
    title: 'Earned',
    value: 2445,
    percentage: '+2.20%',
    percentageColor: 'text-green-400 dark:text-green-400',
    chartColor: ['#3b82f6'],
    series: earnChartSeries,
    options: earnChartOptions,
    span: 1,
  },
  {
    title: 'Total Earning',
    value: '$78,298',
    percentageColor: 'text-green-400 dark:text-green-400',
    chartColor: ['#44b9f7'],
    series: totalChartSeries,
    options: totalChartOptions,
    span: 1,
    config: {
      valuePosition: 'down',
      chartPosition: 'down',
    },
  },
];

export const chartContentDatas2: SectionContent[] = [
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
            valuePosition: 'down',
            chartPosition: 'up',
          },
          variant: 'chart',
          title: 'Income',
          value: '$25,260',
          percentage: '+1.25%',
          percentageColor: 'text-green-400 dark:text-green-400',
          chartColor: ['#7599FF'],
          series: incomeChartSeries,
          options: incomeChartOptions,
          span: 1,
        },
        {
          config: {
            valuePosition: 'down',
            chartPosition: 'up',
          },
          variant: 'chart',
          title: 'Expance',
          value: '$12,260',
          percentage: '+4.25%',
          percentageColor: 'text-green-400 dark:text-green-400',
          chartColor: ['#64C8FF'],
          series: expanceChartSeries,
          options: expanceChartOptions,
          span: 1,
        },
        {
          config: {
            valuePosition: 'down',
            chartPosition: 'up',
          },
          variant: 'chart',

          title: 'Current Year',
          value: '$98,260',
          percentage: '+2.5%',
          percentageColor: 'text-green-400 dark:text-green-400',
          chartColor: ['#7599FF', '#E7EDFF', '#64C8FF'],
          series: currentYearChartDatas,
          options: currentYearChartOptions,
          span: 1,
        },
      ],
    },
  },
];

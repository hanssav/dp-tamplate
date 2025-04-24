import {
  reveneueUpdateChartOptions,
  revenueUpdateChartSeries,
} from './../options/revenueUpdateChartOptions';
import {
  monthlyEarningChartSeries,
  monthlyEarningrChartOptions,
} from './../options/monthlyEarningChartOptions';
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
import {
  yearlyBackupChartOptions,
  yearlyBackupChartSeries,
} from '@datas/pages/charts/options/yearlyBackupChartOptions';

export const chartContentDatas1: SectionContent[] = [
  {
    config: {
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
      chartPosition: 'down',
      valuePosition: 'down',
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

import { HiArrowSmUp } from 'react-icons/hi';
import { Grip } from 'lucide-react';
import {
  yearlyChartOptions,
  yearlyChartSeries,
} from '@datas/pages/charts/options/yearlySalesChartOptions';
import { POSITIONS } from '@datas/pages/charts/constants';

export const chartContentData3: SectionContent[] = [
  {
    multipleRow: true,
    variant: 'chart',
    span: 1,
    data: [
      {
        config: {
          chartPosition: POSITIONS.RIGHT,
        },
        additionalContent: {
          summaryPercent: ' +9%',
          summaryIcon: HiArrowSmUp,
          bgIcon: 'text-green-500',
          summaryYears: ['2025', '2023'],
        },
        title: 'Yearly Breakup',
        variant: 'chart',
        value: '$36,358',
        chartColor: ['#1E90FF', '#E5EDFF', '#F1F5F9'],
        series: yearlyBackupChartSeries,
        options: yearlyBackupChartOptions,
        span: 1,
      },
      {
        config: {
          chartPosition: POSITIONS.DOWN,
        },
        additionalContent: {
          summaryPercent: ' +9%',
          summaryIcon: HiArrowSmUp,
          bgIcon: 'text-green-500',
          summaryYears: ['2025', '2023'],
        },
        title: 'Monthly Earnings',
        variant: 'chart',
        value: '$6,820',
        percentage: '-4.150%',
        percentageColor: 'text-red-400 dark:text-red-400',
        chartColor: ['#3b82f6'],
        series: monthlyEarningChartSeries,
        options: monthlyEarningrChartOptions,
        span: 1,
      },
    ],
  },
  {
    variant: 'chart',
    config: {
      chartPosition: POSITIONS.CENTER,
    },
    additionalContent: {
      footer: [
        {
          label: 'Salary',
          value: '$36,358',
          icon: Grip,
          iconColor:
            'text-primary hover:text-white dark:text-primary dark:hover:text-white',
          bgIcon:
            'bg-light-primary enabled:hover:bg-[#7599FF] enabled:dark:bg-primary-dark dark:enabled:hover:bg-[#7599FF] ',
        },
        {
          label: 'Expance',
          value: '$5,296',
          icon: Grip,
          bgIcon:
            'bg-light-secondary enabled:hover:bg-[#64C8FF] dark:bg-secondary-dark',
          iconColor:
            'text-secondary  hover:text-white dark:text-primary dark:hover:text-white',
        },
      ],
      title: 'Yearly Sales',
      desc: 'Every month',
    },
    title: 'Yearly Sales',
    chartColor: [
      '#E7EDFF',
      '#E7EDFF',
      '#7599FF',
      '#E7EDFF',
      '#E7EDFF',
      '#E7EDFF',
    ],
    series: yearlyChartSeries,
    options: yearlyChartOptions,
    span: 1,
  },
  {
    variant: 'chart',
    title: 'Revenue Updates',
    additionalContent: {
      title: 'Revenue Updates',
      desc: 'Overview of Profit',
    },
    chartColor: ['#7599FF', '#64C8FF'],
    series: revenueUpdateChartSeries,
    options: reveneueUpdateChartOptions,
    span: 1,
  },
];

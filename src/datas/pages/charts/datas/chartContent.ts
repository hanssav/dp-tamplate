import {
  projectChartSeries,
  propjectChartOptions,
} from './../options/projectChartOptions';
import {
  revenueUpdateChartOptions,
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
import { NestedContent, SectionContent } from '@datas/pages/config';
import {
  yearlyBackupChartOptions,
  yearlyBackupChartSeries,
} from '@datas/pages/charts/options/yearlyBackupChartOptions';
import { Grip, ArrowUp } from 'lucide-react';
import {
  yearlyChartOptions,
  yearlyChartSeries,
} from '@datas/pages/charts/options/yearlySalesChartOptions';
import { POSITIONS } from '@datas/pages/charts/constants';
import {
  mostVisitedChartOptions,
  mostVisitedChartSeries,
} from '@datas/pages/charts/options/mostVisitedChartOptions';
import {
  pageImpressionChartOptions,
  pageImpressionChartSeries,
} from '@datas/pages/charts/options/pageImpressionChartOptions';
import {
  salesOverviewChartDatas,
  salesOverviewChartOptions,
} from '@datas/pages/charts/options/salesOverviewChartOptions';
import {
  customerChartOptions,
  customerChartSeries,
} from '@datas/pages/charts/options/customerChartOptions';

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
    type: 'columnGroup',
    title: 'Current Value',
    config: {
      border: 'border-none',
      padding: 'px-5 py-2',
      usePaddingInContent: true,
    },
    button: [
      { color: 'primary', label: 'Buy', onclick: () => {} },
      { color: 'outline', label: 'Sell', onclick: () => {} },
    ],
    col: 'col-3',
    childOptions: {
      type: 'columnGroup',
    },
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
];

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
          summaryIcon: ArrowUp,
          bgIcon: 'text-green-500',
          legends: [
            { year: '2025', color: 'bg-blue-500' },
            { year: '2022', color: 'bg-blue-100' },
          ],
        },
        title: 'Yearly Breakup',
        variant: 'chart',
        value: '$36,358',
        chartColor: ['#7599FF', '#E5EDFF', '#F1F5F9'],
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
          summaryIcon: ArrowUp,
          bgIcon: 'text-green-500',
          summaryYears: ['2025', '2023'],
        },
        title: 'Monthly Earnings',
        variant: 'chart',
        value: '$6,820',
        percentage: '-4.150%',
        percentageColor: 'text-red-400 dark:text-red-400',
        chartColor: ['#7599FF'],
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
    options: revenueUpdateChartOptions,
    span: 1,
  },
];

export const chartContentData4: SectionContent[] = [
  {
    variant: 'chart',
    title: 'Most Visited',
    additionalContent: {
      title: 'Most Visited',
      dataByMonth: {
        'March 2025': [10, 20, 30, 40, 50],
        'April 2025': [15, 25, 35, 45, 55],
        'June 2025': [20, 30, 40, 50, 60],
      },
    },
    chartColor: ['#7599FF', '#64C8FF'],
    series: mostVisitedChartSeries,
    options: mostVisitedChartOptions,
  },
  {
    multipleRow: true,
    type: 'nested',
    variant: 'chart',
    span: 1,
    data: [
      {
        variant: 'chart',
        title: 'Page Impressions',
        config: {
          chartPosition: POSITIONS.RIGHT,
        },
        additionalContent: {
          title: 'Page Impressions',
          desc: '(Change Yesterday)',
          value: '$456,120',
          summaryPercent: ' -9%',
          summaryIcon: ArrowUp,
          bgIcon: 'text-red-500',
        },
        chartColor: [
          '#E7EDFF',
          '#E7EDFF',
          '#64C8FF',
          '#E7EDFF',
          '#E7EDFF',
          '#E7EDFF',
        ],
        series: pageImpressionChartSeries,
        options: pageImpressionChartOptions,
      },
      {
        col: 'col-2',
        type: 'nested',
        variant: 'chart',
        span: 2,
        data: [
          {
            config: {
              valuePosition: POSITIONS.DOWN,
              percentagePosition: POSITIONS.DOWN,
            },
            variant: 'chart',
            title: 'Customers',
            value: '36358',
            percentage: '-9%',
            percentageColor: 'text-red-400 dark:text-red-400',
            additionalContent: {
              title: 'Customers',
              summaryIcon: ArrowUp,
            },
            chartColor: ['#64C8FF'],
            series: customerChartSeries,
            options: customerChartOptions,
          },
          {
            config: {
              valuePosition: POSITIONS.DOWN,
              percentagePosition: POSITIONS.DOWN,
            },
            variant: 'chart',
            title: 'Projects',
            value: '78298',
            percentage: '+9%',
            percentageColor: 'text-green-400 dark:text-green-400',
            additionalContent: {
              title: 'Customers',
              summaryIcon: ArrowUp,
            },
            chartColor: ['#64C8FF'],
            series: projectChartSeries,
            options: propjectChartOptions,
          },
        ],
      },
    ],
  } as NestedContent,
  {
    variant: 'chart',
    config: {
      chartPosition: POSITIONS.CENTER,
    },
    additionalContent: {
      footer: [
        {
          label: 'Profit',
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
      title: 'Sales Overview',
      desc: 'Every month',
    },
    title: 'Yearly Sales',
    chartColor: ['#7599FF', '#E7EDFF', '#64C8FF'],
    series: salesOverviewChartDatas,
    options: salesOverviewChartOptions,
    span: 1,
  },
];

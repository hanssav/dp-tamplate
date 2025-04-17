import { SectionContent } from '@datas/pages/config';
import { ApexOptions } from 'apexcharts';

export const areaChartsOptions: ApexOptions = {
  chart: {
    id: 'followers-chart',
    toolbar: { show: false },
    sparkline: { enabled: true },
    background: 'transparent',
    type: 'area',
  },
  stroke: {
    curve: 'straight',
    width: 2,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.1,
      gradientToColors: ['#3b82f6'],
      opacityTo: 0,
      opacityFrom: 0.8,
      stops: [0, 100],
      colorStops: [],
    },
  },
  colors: ['#3b82f6'],
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
};

export const barChartsOptions: ApexOptions = {
  chart: {
    id: 'views-bar-chart',
    type: 'bar',
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
    background: 'transparent',
  },

  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 6,
      distributed: true,
      isDumbbell: true,
    },
  },

  tooltip: {
    enabled: true,
    theme: 'dark',
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
};

const viewBarCharColor = [
  '#dbeafe',
  '#dbeafe',
  '#44b9f7',
  '#dbeafe',
  '#dbeafe',
];

export const followerChartSeries = [
  {
    name: 'Followers',
    data: [0, 15, 11, 24, 20, 20, 30, 20],
  },
];

export const viewsChartSeries = [
  {
    name: 'Views',
    data: [20, 15, 30, 25, 10, 18, 20],
  },
];

export const earnChartSeries = [
  {
    name: 'Earned',
    data: [0, 3, 1, 2, 8, 1, 5, 1],
  },
];

export const totalChartSeries = [
  {
    name: 'Earned',
    data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
  },
];

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

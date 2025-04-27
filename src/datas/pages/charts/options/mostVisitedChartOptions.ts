import { THEME_MODE_CONSTANT } from '@constant/index';
import {
  MONTH_DATAS,
  MOST_VISITED_ID,
  POSITIONS,
} from '@datas/pages/charts/constants';
import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
import { ApexOptions } from 'apexcharts';

export const mostVisitedChartSeries = [
  {
    name: 'San Fransisco',
    data: [25, 37, 32, 26, 19, 25],
  },
  {
    name: 'Diego',
    data: [28, 11, 30, 15, 19, 28],
  },
];

export const mostVisitedChartOptions: ApexOptions = createChartOptions('bar', {
  chart: {
    id: MOST_VISITED_ID,
    height: 340,
    stacked: true,
    sparkline: {
      enabled: false,
    },
  },
  tooltip: {
    enabled: true,
    theme: THEME_MODE_CONSTANT.DARK,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5,
      columnWidth: '40%',
      distributed: false,
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'all',
    },
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  legend: {
    position: POSITIONS.BOTTOM,
    horizontalAlign: POSITIONS.CENTER,
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['San Fransisco', 'Diego'],
    markers: {
      fillColors: ['#7599FF', '#64C8FF'],
      size: 6,
      shape: 'circle',
    },
  },
  xaxis: {
    categories: MONTH_DATAS.slice(0, mostVisitedChartSeries[0].data.length),
    position: 'bottom',
    labels: {
      show: true,
      style: {
        colors: '#78909C',
        fontSize: '12px',
      },
    },
    axisBorder: {
      show: true,
      color: '#78909C',
      strokeWidth: 1,
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#78909C',
      height: 6,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      showDuplicates: false,
      align: 'right',
      maxWidth: 160,
      style: {
        colors: ['#78909C'],
        cssClass: 'apexcharts-yaxis-label',
      },
      offsetX: 11,
      offsetY: 0,
      rotate: 0,
      formatter: (val: number) => `${val}`,
    },
  },
  dataLabels: {
    enabled: false,
  },

  grid: {
    show: false,
    padding: {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
    },
  },
});

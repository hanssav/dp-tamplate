import { ApexOptions } from 'apexcharts';

export const baseAreaChartsOptions: ApexOptions = {
  chart: {
    id: 'area-chart',
    toolbar: { show: false },
    sparkline: { enabled: true },
    background: 'transparant',
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
  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

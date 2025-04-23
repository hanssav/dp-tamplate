import { ApexOptions } from 'apexcharts';

export const baseBarChartOptions: ApexOptions = {
  chart: {
    background: 'transparent',
    type: 'bar',
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      columnWidth: '40%',
      borderRadius: 6,
    },
  },
  xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },

  grid: {
    padding: {
      top: 10,
      right: 10,
      bottom: 20,
      left: 10,
    },
  },
  tooltip: {
    enabled: false,
  },
};

    import { THEME_MODE_CONSTANT } from '@constant/index';
    import { MONTH_DATAS, REVENUE_UPDATE_ID } from '@datas/pages/charts/constants';
    import { createChartOptions } from '@datas/pages/charts/utils/mergeChartOptions';
    import { ApexOptions } from 'apexcharts';

    export const revenueUpdateChartSeries = [
    {
        name: 'Footware',
        data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
    },
    {
        name: 'Fashionware',
        data: [-2.8, -1.1, -3, -1.5, -1.9, -2.8],
    },
    ];

    export const reveneueUpdateChartOptions: ApexOptions = createChartOptions('bar', {
      chart: {
        id: REVENUE_UPDATE_ID,
        height: 350,
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
          columnWidth: '20%',
          distributed: false,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Footware', 'Fashionware'],
        markers: {
          fillColors: ['#7599FF', '#64C8FF'],
          size: 6,
          shape: 'circle',
        },
      },
      xaxis: {
        categories: MONTH_DATAS.slice(
          0,
          revenueUpdateChartSeries[0].data.length
        ),
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

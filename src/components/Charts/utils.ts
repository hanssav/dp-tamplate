import { ApexOptions } from 'apexcharts';

// Types
export type ChartPosition = 'up' | 'right' | 'left' | 'down';

export const getChartLayoutClassName = (
  chartPosition: ChartPosition | string
): string => {
  const chartClassMap: Record<'right' | 'left', string> = {
    right: 'p-4 flex flex-row items-center justify-center',
    left: 'flex flex-row-reverse items-center justify-center',
  };

  return `max-w-wd mb-0 w-full ${
    chartPosition === 'right' || chartPosition === 'left'
      ? chartClassMap[chartPosition]
      : ''
  }`;
};

export const applyThemeToOptions = (
  options: ApexOptions,
  themeMode: 'light' | 'dark',
  chartColor: string | string[]
): ApexOptions => {
  const colorsArray = Array.isArray(chartColor) ? chartColor : [chartColor];

  return {
    ...options,
    colors: colorsArray,
    theme: {
      mode: themeMode,
    },
    tooltip: {
      ...options.tooltip,
      theme: themeMode,
    },
  };
};

import { ThemeMode } from '@constant/index';
import { ChartPosition } from '@datas/pages/config';
import { ApexOptions } from 'apexcharts';

// Types
export const getChartLayoutClassName = (
  chartPosition: ChartPosition | string
): string => {
  const chartClassMap: Record<'right' | 'left', string> = {
    right: 'p-4  flex flex-row items-center justify-center',
    left: 'flex flex-row-reverse items-center justify-center ',
  };

  return `max-w-wd gap-2  w-full ${
    chartPosition === 'right' || chartPosition === 'left'
      ? chartClassMap[chartPosition]
      : ''
  }`;
};

export const applyThemeToOptions = (
  options: ApexOptions,
  themeMode: ThemeMode,
  chartColor: string | string[]
): ApexOptions => {
  const colorsArray = Array.isArray(chartColor) ? chartColor : [chartColor];

  return {
    ...options,
    colors: colorsArray.length > 0 ? colorsArray : options.colors,
    theme: {
      mode: themeMode,
    },
    tooltip: {
      ...options.tooltip,
      theme: themeMode,
    },
  };
};

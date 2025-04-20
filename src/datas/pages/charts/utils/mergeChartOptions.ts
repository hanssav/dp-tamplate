import { baseAreaChartsOptions } from '@datas/pages/charts/options/baseAreaChartOptions';
import { baseBarChartOptions } from '@datas/pages/charts/options/baseBarChartOptions';
import { baseDonutChartOptions } from '@datas/pages/charts/options/baseDonutChartOptions';
import { ApexOptions } from 'apexcharts';

const deepMerge = (target: any, source: any): any => {
  const output = { ...target };
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
};

const mergeChartOptions = (
  base: ApexOptions,
  custom: ApexOptions
): ApexOptions => {
  return deepMerge(base, custom);
};

type ChartType = 'bar' | 'area' | 'donut';

const baseChartMap: Record<ChartType, ApexOptions> = {
  bar: baseBarChartOptions,
  area: baseAreaChartsOptions,
  donut: baseDonutChartOptions,
};

export const createChartOptions = (
  type: ChartType,
  custom: ApexOptions
): ApexOptions => {
  return mergeChartOptions(baseChartMap[type], custom);
};

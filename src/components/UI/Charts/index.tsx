import React from 'react';
import ApexChart, { Props as ApexChartProps } from 'react-apexcharts';

export const Chart: React.FC<ApexChartProps> = ({
  options,
  series,
  type = 'area',
  height = 100,
  width = '100%',
  ...rest
}) => {
  return (
    <ApexChart
      options={options}
      series={series}
      type={type}
      height={height}
      width={width}
      {...rest}
    />
  );
};

export default Chart;

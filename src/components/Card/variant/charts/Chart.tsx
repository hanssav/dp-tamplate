import Col from '@components/Col';
import Typography from '@components/Typography';
import { ChartCardContent } from '@datas/pages/config';
import { formatNumber } from '@utils/function';
import { useThemeMode } from 'flowbite-react';
import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

interface TitleValueProps {
  title: string;
  value: string | number;
  position?: 'up' | 'down';
}

const TitleValue: React.FC<TitleValueProps> = ({
  title,
  value,
  position = 'up',
}) => {
  const valueItem = { text: formatNumber(value), style: 'title' as const };
  const titleItem = { text: title, style: 'body' as const };

  const items =
    position === 'down' ? [titleItem, valueItem] : [valueItem, titleItem];

  return (
    <>
      {items.map((item, idx) => (
        <Typography key={idx} as="p" textStyle={item.style}>
          {item.text}
        </Typography>
      ))}
    </>
  );
};

interface ChartCardProps {
  content: ChartCardContent;
}

export const ChartContent: React.FC<ChartCardProps> = ({ content }) => {
  const {
    title,
    value,
    percentage,
    percentageColor = 'text-green-500',
    chartColor = '#3b82f6',
    options,
    series,
    config = {},
  } = content;

  console.log(options, title);

  const { mode } = useThemeMode();

  const themeMode: 'light' | 'dark' = mode === 'dark' ? 'dark' : 'light';

  const dynamicOptions = useMemo(() => {
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
  }, [mode, chartColor]);

  const renderContentText = () => (
    <Col col="col-2" className="flex items-end justify-between p-4">
      <Col className="gap-0">
        <TitleValue
          title={title}
          value={value}
          position={config.valuePosition}
        />
      </Col>
      <Typography
        as="p"
        className={`mt-1 text-sm font-medium ${percentageColor}`}
      >
        {percentage}
      </Typography>
    </Col>
  );

  const renderChart = () => (
    <div className="">
      <Chart
        options={dynamicOptions}
        series={series}
        type={options.chart?.type || 'area'}
        height={options.chart?.height || 100}
        width="100%"
      />
    </div>
  );

  return (
    <Col className="max-w-wd w-full">
      {config.chartPosition === 'up' && renderChart()}
      {renderContentText()}
      {config.chartPosition !== 'up' && renderChart()}
    </Col>
  );
};

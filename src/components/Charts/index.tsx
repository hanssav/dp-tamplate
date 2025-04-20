import Col from '@components/Col';
import Typography from '@components/Typography';
import { ChartCardContent } from '@datas/pages/config';
import { formatNumber } from '@utils/function';
import { useThemeMode } from 'flowbite-react';
import React, { useMemo } from 'react';
import ApexChart from 'react-apexcharts';

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

export const Chart: React.FC<ChartCardProps> = ({ content }) => {
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

  console.log(content.additionalContent?.summaryIcon, title);

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

  const isYearlyBackupChart = options.chart?.id === 'yearly-backup-chart';
  const Icon = content.additionalContent?.summaryIcon;

  const renderContentText = () => {
    if (isYearlyBackupChart) {
      return (
        <Col margin="m-0 w-full">
          <Typography as="h2" textStyle="title">
            Yearly Breakup
          </Typography>

          {/* Value Section */}
          <Col margin="mt-4 mb-0" justify="between" align="center">
            <Col margin="m-0 gap-y-3">
              <Typography as="p" textStyle="heading-md">
                $36,358
              </Typography>
              <Typography
                as="p"
                textStyle="desc"
                className="flex items-center text-green-500"
              >
                <span className="mr-2 flex h-9 w-9 rotate-[20deg] items-center justify-center rounded-full bg-light-success">
                  <Icon className="h-7 w-7 text-green-500" />
                </span>
                +9% last year
              </Typography>
            </Col>
          </Col>

          <Col
            margin="mt-4"
            justify="start"
            align="center"
            className="flex space-x-1 text-sm text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-blue-500"></span>
              <span>2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-blue-100"></span>
              <span>2022</span>
            </div>
          </Col>
        </Col>
      );
    }

    return (
      <Col col="col-2" className="mb-0 flex items-end justify-between p-4">
        <Col className="mb-0 gap-0">
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
  };

  const renderChart = () => (
    <Col className="span-0 mb-0">
      <ApexChart
        options={dynamicOptions}
        series={series}
        type={options.chart?.type || 'area'}
        height={options.chart?.height || 100}
        width="100%"
      />
    </Col>
  );

  const chartClassMap: Record<'right' | 'left', string> = {
    right: 'p-4 flex flex-row items-center justify-center',
    left: 'flex flex-row-reverse items-center justify-center',
  };

  const chartPosition = config.chartPosition ?? '';
  const colClassName = `max-w-wd mb-0 w-full ${
    chartPosition === 'right' || chartPosition === 'left'
      ? chartClassMap[chartPosition]
      : ''
  }`;

  const shouldRenderChartUp = chartPosition === 'up';
  const shouldRenderChartSide =
    chartPosition === 'right' || chartPosition === 'left';
  const shouldRenderChartOther = !shouldRenderChartUp && !shouldRenderChartSide;

  return (
    <Col className={colClassName}>
      {shouldRenderChartUp && renderChart()}
      {renderContentText()}
      {isYearlyBackupChart && (
        <div className="mt-2 flex justify-end">{renderChart()}</div>
      )}
      {!isYearlyBackupChart && shouldRenderChartSide && renderChart()}
      {!isYearlyBackupChart && shouldRenderChartOther && renderChart()}
    </Col>
  );
};

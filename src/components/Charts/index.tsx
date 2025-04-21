import React, { useMemo } from 'react';
import ApexChart from 'react-apexcharts';
import { useThemeMode } from 'flowbite-react';
import Col from '@components/Col';
import { ChartCardContent } from '@datas/pages/config';
import {
  applyThemeToOptions,
  getChartLayoutClassName,
  ChartPosition,
} from './utils';
import {
  DefaultContent,
  YearlyBackupContent,
} from '@components/Charts/contents/ChartContents';

interface ChartCardProps {
  content: ChartCardContent;
}

export const Chart: React.FC<ChartCardProps> = ({ content }) => {
  const { chartColor = '#3b82f6', options, series, config = {} } = content;

  const { mode } = useThemeMode();
  const themeMode: 'light' | 'dark' = mode === 'dark' ? 'dark' : 'light';
  const isYearlyBackupChart = options.chart?.id === 'yearly-backup-chart';
  const chartPosition = (config.chartPosition as ChartPosition) || '';

  // Determine whether to show content based on title and value existence
  const shouldShowContent = Boolean(content.title || content.value);

  // Chart options with theme mode
  const dynamicOptions = useMemo(
    () => applyThemeToOptions(options, themeMode, chartColor),
    [mode, chartColor, options]
  );

  // Chart rendering
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

  // Content rendering - only if we have content to show
  const renderContent = () => {
    if (!shouldShowContent) {
      return null;
    }

    return isYearlyBackupChart ? (
      <YearlyBackupContent content={content} />
    ) : (
      <DefaultContent content={content} />
    );
  };

  const renderLayout = () => {
    return shouldShowContent ? renderMergedLayout() : renderChart();
  };

  function renderMergedLayout() {
    const layoutComponents = {
      yearlyBackup: [
        renderContent,
        () => <Col justify="end">{renderChart()}</Col>,
      ],
      up: [renderChart, renderContent],
      right: [renderContent, renderChart],
      left: [renderContent, renderChart],
      default: [renderContent, renderChart],
    };

    const selectedLayout = isYearlyBackupChart
      ? layoutComponents.yearlyBackup
      : layoutComponents[chartPosition as keyof typeof layoutComponents] ||
        layoutComponents.default;

    return (
      <>
        {selectedLayout.map((Component, index) => (
          <React.Fragment key={index}>
            {typeof Component === 'function' ? Component() : Component}
          </React.Fragment>
        ))}
      </>
    );
  }

  // Use appropriate class based on whether content is shown
  const className = !shouldShowContent
    ? 'mb-0 w-full'
    : getChartLayoutClassName(chartPosition);

  return <Col className={className}>{renderLayout()}</Col>;
};

export default Chart;

import React, { useMemo } from 'react';
import ApexChart from 'react-apexcharts';
import { useThemeMode } from 'flowbite-react';
import Col from '@components/Col';
import { ChartCardContent, ChartPosition } from '@datas/pages/config';
import { applyThemeToOptions, getChartLayoutClassName } from './utils';
import {
  DefaultContent,
  MonthlyEarningContent,
  YearlyBackupContent,
  YearlySalesContent,
  YearlySalesFooter,
} from '@components/Charts/contents/ChartContents';
import { YEARLY_BACKUP_ID } from '@datas/pages/charts/options/yearlyBackupChartOptions';
import {
  MONTHLY_EARNING_ID,
  POSITIONS,
  YEARLY_SALES_ID,
} from '@datas/pages/charts/constants';
import { ThemeMode, THEME_MODE_CONSTANT } from '@constant/index';

interface ChartCardProps {
  content: ChartCardContent;
}

export const Chart: React.FC<ChartCardProps> = ({ content }) => {
  const { chartColor = 'primary', options, series, config = {} } = content;

  const { mode } = useThemeMode();
  const themeMode: ThemeMode =
    mode === 'dark' ? THEME_MODE_CONSTANT.DARK : THEME_MODE_CONSTANT.LIGHT;

  const isYearlyBackupChart = options.chart?.id === YEARLY_BACKUP_ID;
  const isMonthlyEarningChart = options.chart?.id === MONTHLY_EARNING_ID;
  const isYearlySalesChart = options.chart?.id === YEARLY_SALES_ID;
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

  // Upper content rendering - only if we have content to show
  const renderContent = () => {
    if (!shouldShowContent) {
      return null;
    }

    return isYearlyBackupChart ? (
      <YearlyBackupContent content={content} />
    ) : isMonthlyEarningChart ? (
      <MonthlyEarningContent content={content} />
    ) : isYearlySalesChart ? (
      <YearlySalesContent content={content} />
    ) : (
      <DefaultContent content={content} />
    );
  };

  // Footer rendering - only if chartPosition is 'center'
  const renderFooter = () => {
    if (chartPosition !== POSITIONS.CENTER) {
      return null;
    }
    return isYearlySalesChart ? <YearlySalesFooter content={content} /> : '';
  };

  // Layout rendering based on chart position
  const renderLayout = () => {
    return shouldShowContent ? renderMergedLayout() : renderChart();
  };

  function renderMergedLayout() {
    const layoutComponents = {
      yearlyBackup: [renderContent, renderChart],
      montlyEarn: [renderContent, renderChart],
      up: [renderChart, renderContent],
      right: [renderContent, renderChart],
      left: [renderContent, renderChart],
      center: [renderContent, renderChart, renderFooter],
      default: [renderContent, renderChart],
    };

    const selectedLayout = isYearlyBackupChart
      ? layoutComponents.yearlyBackup
      : isMonthlyEarningChart
        ? layoutComponents.montlyEarn
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
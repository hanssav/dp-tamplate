import React, { useMemo } from 'react';
import ApexChart from 'react-apexcharts';
import { useThemeMode } from 'flowbite-react';
import Col from '@components/Col';
import { ChartCardContent, ChartPosition } from '@datas/pages/config';
import { applyThemeToOptions, getChartLayoutClassName } from './utils';
import {
  ChartHeader,
  DefaultContent,
  MonthlyEarningContent,
  RightCardContent,
  FooterChart,
} from '@components/Charts/contents/ChartContents';
import { YEARLY_BACKUP_ID } from '@datas/pages/charts/options/yearlyBackupChartOptions';
import {
  MONTHLY_EARNING_ID,
  MOST_VISITED_ID,
  PAGE_IMPRESSION_ID,
  POSITIONS,
  REVENUE_UPDATE_ID,
  SALES_OVERVIEW_ID,
  YEARLY_SALES_ID,
} from '@datas/pages/charts/constants';
import { ThemeMode, THEME_MODE_CONSTANT } from '@constant/index';

interface ChartCardProps {
  content: ChartCardContent;
}

export const Chart: React.FC<ChartCardProps> = ({ content }) => {
  const { chartColor = ['#7599FF'], options, series, config = {} } = content;
  const { mode } = useThemeMode();

  const themeMode: ThemeMode =
    mode === 'dark' ? THEME_MODE_CONSTANT.DARK : THEME_MODE_CONSTANT.LIGHT;

  const chartId = options.chart?.id;

  const isChart = (targetId: string) => chartId === targetId;

  const isYearlyBackupChart = isChart(YEARLY_BACKUP_ID);
  const isMonthlyEarningChart = isChart(MONTHLY_EARNING_ID);
  const isYearlySalesChart = isChart(YEARLY_SALES_ID);
  const isReveneuUpdateChart = isChart(REVENUE_UPDATE_ID);
  const isMostVisitedChart = isChart(MOST_VISITED_ID);
  const isPageImpressionChart = isChart(PAGE_IMPRESSION_ID);
  const isSalesOverviewChart = isChart(SALES_OVERVIEW_ID);

  const chartPosition = (config.chartPosition as ChartPosition) || '';

  // Determine whether to show content based on title and value existence
  const shouldShowContent = Boolean(content.title || content.value);

  const renderContent = () => {
    if (!shouldShowContent) {
      return null;
    }

    return isYearlyBackupChart || isPageImpressionChart ? (
      <RightCardContent content={content} />
    ) : isMonthlyEarningChart ? (
      <MonthlyEarningContent content={content} />
    ) : isYearlySalesChart ||
      isReveneuUpdateChart ||
      isMostVisitedChart ||
      isSalesOverviewChart ? (
      <ChartHeader content={content} />
    ) : (
      <DefaultContent content={content} />
    );
  };

  const renderFooter = () => {
    if (chartPosition !== POSITIONS.CENTER) {
      return null;
    }
    return isYearlySalesChart || isSalesOverviewChart ? (
      <FooterChart content={content} />
    ) : (
      ''
    );
  };

  // Chart options with theme mode
  const dynamicOptions = useMemo(() => {
    return applyThemeToOptions(options, themeMode, chartColor);
  }, [themeMode, chartColor, options]);

  // Chart rendering
  const renderChart = () => (
    <Col className="span-0 mb-0">
      <ApexChart
        key={options.chart?.id + '-' + themeMode}
        options={dynamicOptions}
        series={series}
        type={options.chart?.type || 'area'}
        height={options.chart?.height || 100}
        width="100%"
      />
    </Col>
  );

  function renderMergedLayout() {
    const layoutComponents = {
      up: [renderChart, renderContent],
      right: [renderContent, renderChart],
      left: [renderContent, renderChart],
      center: [renderContent, renderChart, renderFooter],
      default: [renderContent, renderChart],
    };

    const selectedLayout =
      layoutComponents[chartPosition as keyof typeof layoutComponents] ||
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

  // Layout rendering based on chart position
  const renderLayout = () => {
    return shouldShowContent ? renderMergedLayout() : renderChart();
  };

  // Use appropriate class based on whether content is shown
  const className = !shouldShowContent
    ? 'mb-0 w-full'
    : getChartLayoutClassName(chartPosition);

  return <Col className={className}>{renderLayout()}</Col>;
};

export default Chart;

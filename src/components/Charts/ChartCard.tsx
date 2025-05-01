import React, { useMemo } from 'react';
import { useThemeMode } from 'flowbite-react';
import Box from '@components/Box';
import { ChartCardContent, ChartPosition } from '@datas/pages/config';
import { applyThemeToOptions, getChartLayoutClassName } from './utils';
import {
  ChartHeader,
  DefaultContent,
  MonthlyEarningContent,
  RightCardContent,
  FooterChart,
} from './contents/ChartContents';
import {
  MONTHLY_EARNING_ID,
  MOST_VISITED_ID,
  PAGE_IMPRESSION_ID,
  POSITIONS,
  REVENUE_UPDATE_ID,
  SALES_OVERVIEW_ID,
  YEARLY_BACKUP_ID,
  YEARLY_SALES_ID,
} from '@datas/pages/charts/constants';
import { ThemeMode, THEME_MODE_CONSTANT } from '@constant/index';
import Chart from '@components/Charts';

interface ChartCardProps {
  content: ChartCardContent;
}

export const ChartCard: React.FC<ChartCardProps> = ({ content }) => {
  const { chartColor = ['#7599FF'], options, series, config = {} } = content;
  const { mode } = useThemeMode();

  const themeMode: ThemeMode =
    mode === 'dark' ? THEME_MODE_CONSTANT.DARK : THEME_MODE_CONSTANT.LIGHT;

  const chartId = options.chart?.id;
  const isChart = (targetId: string) => chartId === targetId;

  const isYearlyBackupChart = isChart(YEARLY_BACKUP_ID);
  const isMonthlyEarningChart = isChart(MONTHLY_EARNING_ID);
  const isYearlySalesChart = isChart(YEARLY_SALES_ID);
  const isRevenueUpdateChart = isChart(REVENUE_UPDATE_ID);
  const isMostVisitedChart = isChart(MOST_VISITED_ID);
  const isPageImpressionChart = isChart(PAGE_IMPRESSION_ID);
  const isSalesOverviewChart = isChart(SALES_OVERVIEW_ID);

  const chartPosition = (config.chartPosition as ChartPosition) || '';

  const shouldShowContent = Boolean(content.title || content.value);

  const dynamicOptions = useMemo(() => {
    return applyThemeToOptions(options, themeMode, chartColor);
  }, [options]);

  const renderContent = () => {
    if (!shouldShowContent) return null;

    if (isYearlyBackupChart || isPageImpressionChart) {
      return <RightCardContent content={content} />;
    }

    if (isMonthlyEarningChart) {
      return <MonthlyEarningContent content={content} />;
    }

    if (
      isYearlySalesChart ||
      isRevenueUpdateChart ||
      isMostVisitedChart ||
      isSalesOverviewChart
    ) {
      return <ChartHeader content={content} />;
    }

    return <DefaultContent content={content} />;
  };

  const renderFooter = () => {
    if (chartPosition !== POSITIONS.CENTER) {
      return null;
    }
    if (isYearlySalesChart || isSalesOverviewChart) {
      return <FooterChart content={content} />;
    }
    return null;
  };

  const renderChart = () => (
    <Box>
      <Chart
        key={options.chart?.id}
        options={dynamicOptions}
        series={series}
        type={options.chart?.type || 'area'}
        height={options.chart?.height || 100}
        width="100%"
      />
    </Box>
  );

  const renderMergedLayout = () => {
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
  };

  const className = !shouldShowContent
    ? 'w-full'
    : getChartLayoutClassName(chartPosition);

  return (
    <Box className={className}>
      {shouldShowContent ? renderMergedLayout() : renderChart()}
    </Box>
  );
};

export default ChartCard;

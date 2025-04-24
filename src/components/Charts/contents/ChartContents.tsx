import React, { useState } from 'react';
import Col from '@components/Col';
import Typography from '@components/Typography';
import TitleValue from '@components/Charts/contents/TitleValue';
import Button from '@components/Button';
import { Select } from 'flowbite-react';
import { ChartCardContent } from '@datas/pages/config';
import { YEARLY_BACKUP_ID } from '@datas/pages/charts/options/yearlyBackupChartOptions';
import { POSITIONS } from '@datas/pages/charts/constants';

// IconWithPercentage
const IconWithPercentage: React.FC<{
  Icon: React.ReactNode;
  percentageText: string;
  iconClass: string;
  rotateClass: string;
}> = ({ Icon, percentageText, iconClass, rotateClass }) => (
  <Typography as="p" textStyle="desc" className={`flex items-center ${iconClass}`}>
    <span
      className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-light-${
        iconClass === 'text-green-500' ? 'success' : 'error'
      } ${rotateClass}`}
    >
      {Icon}
    </span>
    {percentageText}
  </Typography>
);

// RightCardContent
const RightCardContent: React.FC<{ content: ChartCardContent }> = ({ content }) => {
  const {
    summaryIcon: Icon,
    legends = [],
    desc,
    value,
    bgIcon,
    summaryPercent,
  } = content.additionalContent || {};

  const isYearlyBackupChart = content.options.chart?.id === YEARLY_BACKUP_ID;

  return (
    <Col margin="m-0 w-full gap-0">
      <Typography as="h2" textStyle="title">
        {content.title}
      </Typography>

      <Col margin="mt-4 mb-0" justify="between" align="center">
        <Col margin="m-0 gap-y-3">
          <Typography as="p" textStyle="title">
            {content.value || value}
          </Typography>
          {desc && (
            <Typography as="p" textStyle="desc">
              {desc}
            </Typography>
          )}
          <IconWithPercentage
            Icon={Icon && <Icon className={`h-5 w-5 ${bgIcon}`} />}
            percentageText={`${summaryPercent} ${isYearlyBackupChart ? 'last year' : ''}`}
            iconClass={bgIcon}
            rotateClass={`rotate-${bgIcon === 'text-green-500' ? '[20deg]' : '[-20deg]'}`}
          />
        </Col>
      </Col>

      <Col
        margin="mt-4 mb-0 gap-o"
        justify="start"
        align="center"
        className="flex space-x-4 text-sm text-gray-600"
      >
        {legends.map((legend: any) => (
          <div key={legend.year} className="flex items-center space-x-2">
            <span className={`h-3 w-3 rounded-full ${legend.color}`}></span>
            <span>{legend.year}</span>
          </div>
        ))}
      </Col>
    </Col>
  );
};

// MonthlyEarningContent
const MonthlyEarningContent: React.FC<{ content: ChartCardContent }> = ({ content }) => {
  const { title, value } = content;
  const Icon = content.additionalContent?.summaryIcon;

  return (
    <>
      <Col col="col-2" justify="between" align="center" margin="flex mb-0 p-4">
        <Col margin="mb-0 gap-0">
          <Typography as="h2" textStyle="title">
            {title}
          </Typography>
        </Col>
        <Col
          margin="mb-0 gap-0"
          className="rounded-lg bg-light-secondary dark:bg-secondary-dark"
          align="center"
        >
          <Button color="light" size="icon" />
        </Col>
      </Col>
      <Col col="col-2" margin="flex mb-0 px-4" justify="start">
        <Typography as="p" textStyle="heading-md">
          {value}
        </Typography>
        <IconWithPercentage
          Icon={Icon && <Icon className="h-5 w-5 text-green-500" />}
          percentageText="+9%"
          iconClass="text-green-500"
          rotateClass="rotate-[-20deg]"
        />
      </Col>
    </>
  );
};

// ChartHeader
const ChartHeader: React.FC<{ content: ChartCardContent }> = ({ content }) => {
  const dataByMonth = content.additionalContent?.dataByMonth || {};
  const months = Object.keys(dataByMonth);
  const [selectedMonth, setSelectedMonth] = useState(months[0] || '');

  return (
    <Col col="col-2" margin="p-4 gap-1" align="end">
      <Col margin="m-0 gap-0">
        <Typography as="h2" textStyle="title">
          {content.additionalContent?.title}
        </Typography>
        <Typography as="p" textStyle="desc">
          {content.additionalContent?.desc}
        </Typography>
      </Col>

      {months.length > 0 && (
        <Select
          className="bg-transparent text-gray-800 focus:border-transparent focus:ring-0"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
      )}
    </Col>
  );
};

// FooterChart
const FooterChart: React.FC<{ content: ChartCardContent }> = ({ content }) => {
  const footerContent = content.additionalContent?.footer || [];

  return (
    <Col col="col-2" align="end" justify="between" margin="px-5 py-0 m-0">
      {footerContent.map((item: any, idx: number) => {
        const IconComponent = item.icon;
        return (
          <Col key={idx} margin="flex gap-3 p-0" justify="start" align="center">
            <Button color={item.bgIcon} className={item.iconColor} size="icon">
              {IconComponent && <IconComponent />}
            </Button>
            <Col margin="p-0 m-0 gap-0">
              <Typography as="p" textStyle="desc">
                {item.label}
              </Typography>
              <Typography as="h2" textStyle="title">
                {item.value}
              </Typography>
            </Col>
          </Col>
        );
      })}
    </Col>
  );
};

// DefaultContent
const DefaultContent: React.FC<{ content: ChartCardContent }> = ({ content }) => {
  const {
    title,
    value,
    percentage,
    percentageColor = 'text-green-500',
    config = {},
  } = content;

  const percentagePosition = config.percentagePosition;

  return (
    <>
      <Col col="col-2" className="mb-0 flex items-end justify-between px-4">
        <Col className="mb-0 gap-0">
          <TitleValue title={title} value={value} position={config.valuePosition} />
        </Col>
        {percentagePosition !== POSITIONS.DOWN && (
          <Typography as="p" className={`mt-1 text-sm font-medium ${percentageColor}`}>
            {percentage}
          </Typography>
        )}
      </Col>
      <Col margin="mb-0 gap-0 px-4">
        {percentagePosition === POSITIONS.DOWN && (
          <Typography as="p" className={`mt-1 text-sm font-medium ${percentageColor}`}>
            {percentage}
          </Typography>
        )}
      </Col>
    </>
  );
};

export {
  RightCardContent,
  MonthlyEarningContent,
  DefaultContent,
  ChartHeader,
  FooterChart,
};

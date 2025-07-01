import React, { useState } from 'react';
import Box from '@components/UI/Box';
import Typography from '@components/UI/Typography';
import TitleValue from '@components/UI/Charts/contents/TitleValue';
import Button from '@components/UI/Button';
import { Select } from 'flowbite-react';
import { ChartCardContent } from '@datas/pages/config';
import { POSITIONS, YEARLY_BACKUP_ID } from '@datas/pages/charts/constants';

// IconWithPercentage
const IconWithPercentage: React.FC<{
  Icon: React.ReactNode;
  percentageText: string;
  iconClass: string;
  rotateClass: string;
}> = ({ Icon, percentageText, iconClass, rotateClass }) => (
  <Typography
    as="p"
    textStyle="desc"
    className={`flex items-center ${iconClass}`}
  >
    <span
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`bg-light mr-2 flex size-6 items-center justify-center rounded-full${
        iconClass === 'text-green-500' ? 'success' : 'error'
      } ${rotateClass}`}
    >
      {Icon}
    </span>
    {percentageText}
  </Typography>
);

// RightCardContent
const RightCardContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
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
    <Box margin="m-0 w-full ">
      <Typography as="h2" textStyle="title">
        {content.title}
      </Typography>

      <Box margin="mt-4 " justify="between" align="center">
        <Box margin="m-0 gap-y-3">
          <Typography as="p" textStyle="title">
            {content.value || value}
          </Typography>
          {desc && (
            <Typography as="p" textStyle="desc">
              {desc}
            </Typography>
          )}
          <IconWithPercentage
            Icon={Icon && <Icon className={`size-5 ${bgIcon}`} />}
            percentageText={`${summaryPercent} ${isYearlyBackupChart ? 'last year' : ''}`}
            iconClass={bgIcon}
            rotateClass={`rotate-${bgIcon === 'text-green-500' ? '[20deg]' : '[-20deg]'}`}
          />
        </Box>
      </Box>

      <Box
        margin="mt-4  gap-o"
        justify="start"
        align="center"
        className="flex space-x-4 text-sm text-gray-600"
      >
        {legends.map((legend: any) => (
          <div key={legend.year} className="flex items-center space-x-2">
            <span className={`size-3 rounded-full ${legend.color}`}></span>
            <span>{legend.year}</span>
          </div>
        ))}
      </Box>
    </Box>
  );
};

// MonthlyEarningContent
const MonthlyEarningContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
  const { title, value } = content;
  const Icon = content.additionalContent?.summaryIcon;

  return (
    <>
      <Box col="col-2" justify="between" align="center" margin="flex  p-4">
        <Box margin=" ">
          <Typography as="h2" textStyle="title">
            {title}
          </Typography>
        </Box>
        <Box
          margin=" "
          className="rounded-lg bg-light-secondary dark:bg-dark-hover-light-secondary"
          align="center"
        >
          <Button color="light" size="icon" />
        </Box>
      </Box>
      <Box col="col-2" margin="flex  px-4" justify="start">
        <Typography as="p" textStyle="heading-md">
          {value}
        </Typography>
        <IconWithPercentage
          Icon={Icon && <Icon className="size-5 text-green-500" />}
          percentageText="+9%"
          iconClass="text-green-500"
          rotateClass="rotate-[-20deg]"
        />
      </Box>
    </>
  );
};

// ChartHeader
const ChartHeader: React.FC<{ content: ChartCardContent }> = ({ content }) => {
  const dataByMonth = content.additionalContent?.dataByMonth || {};
  const months = Object.keys(dataByMonth);
  const [selectedMonth, setSelectedMonth] = useState(months[0] || '');

  return (
    <Box col="col-2" margin="p-4 gap-1" align="end">
      <Box margin="m-0 ">
        <Typography as="h2" textStyle="title">
          {content.additionalContent?.title}
        </Typography>
        <Typography as="p" textStyle="desc">
          {content.additionalContent?.desc}
        </Typography>
      </Box>

      {months.length > 0 && (
        <Select
          className="bg-transparent text-gray-800 focus:border-transparent focus:ring-0"
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          {months.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>
      )}
    </Box>
  );
};

// FooterChart
const FooterChart: React.FC<{ content: ChartCardContent }> = ({ content }) => {
  const footerContent = content.additionalContent?.footer || [];

  return (
    <Box col="col-2" align="end" justify="between" margin="m-6">
      {footerContent.map((item: any, idx: number) => {
        const IconComponent = item.icon;
        return (
          <Box key={idx} margin="flex gap-3 p-0" justify="start" align="center">
            <Button color={item.bgIcon} className={item.iconColor} size="icon">
              {IconComponent && <IconComponent />}
            </Button>
            <Box margin="p-0 m-0 ">
              <Typography as="p" textStyle="desc">
                {item.label}
              </Typography>
              <Typography as="h2" textStyle="title">
                {item.value}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

// DefaultContent
const DefaultContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
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
      <Box col="col-2" className="flex items-end justify-between px-4">
        <Box className="py-3">
          <TitleValue
            title={title}
            value={value}
            position={config.valuePosition}
          />
        </Box>
        {percentagePosition !== POSITIONS.DOWN && (
          <Typography
            as="p"
            className={`mt-1 text-sm font-medium ${percentageColor}`}
          >
            {percentage}
          </Typography>
        )}
      </Box>
      <Box margin="  px-4">
        {percentagePosition === POSITIONS.DOWN && (
          <Typography
            as="p"
            className={`mt-1 text-sm font-medium ${percentageColor}`}
          >
            {percentage}
          </Typography>
        )}
      </Box>
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

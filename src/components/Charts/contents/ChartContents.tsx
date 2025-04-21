import React from 'react';
import Col from '@components/Col';
import Typography from '@components/Typography';
import { ChartCardContent } from '@datas/pages/config';
import TitleValue from '@components/Charts/contents/TitleValue';

export const YearlyBackupContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
  const Icon = content.additionalContent?.summaryIcon;

  return (
    <Col margin="m-0 w-full">
      <Typography as="h2" textStyle="title">
        Yearly Breakup
      </Typography>

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
              {Icon && <Icon className="h-7 w-7 text-green-500" />}
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
};

export const DefaultContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
  const {
    title,
    value,
    percentage,
    percentageColor = 'text-green-500',
    config = {},
  } = content;

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

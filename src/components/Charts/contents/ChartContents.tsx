import React from 'react';
import Col from '@components/Col';
import Typography from '@components/Typography';
import { ChartCardContent } from '@datas/pages/config';
import TitleValue from '@components/Charts/contents/TitleValue';
import Button from '@components/Button';

const IconWithPercentage = ({
  Icon,
  percentageText,
  rotateClass,
}: {
  Icon: React.ReactNode;
  percentageText: string;
  iconClass: string;
  rotateClass: string;
}) => (
  <Typography
    as="p"
    textStyle="desc"
    className="flex items-center text-green-500"
  >
    <span
      className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-light-success ${rotateClass}`}
    >
      {Icon}
    </span>
    {percentageText}
  </Typography>
);

const YearlyBackupContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
  const Icon = content.additionalContent?.summaryIcon;

  return (
    <Col margin="m-0 w-full">
      <Typography as="h2" textStyle="title">
        {content.title}
      </Typography>

      <Col margin="mt-4 mb-0" justify="between" align="center">
        <Col margin="m-0 gap-y-3">
          <Typography as="p" textStyle="heading-md">
            {content.value}
          </Typography>
          <IconWithPercentage
            Icon={Icon && <Icon className="h-5 w-5 text-green-500" />}
            percentageText="+9% last year"
            iconClass="text-green-500"
            rotateClass="rotate-[20deg]"
          />
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

const MonthlyEarningContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
  const { title, value } = content;
  const Icon = content.additionalContent?.summaryIcon;

  return (
    <React.Fragment>
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
          <Button color="light" size="icon"></Button>
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
    </React.Fragment>
  );
};

const YearlySalesContent: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
  return (
    <Col margin="p-4 gap-1">
      <Typography as="h2" textStyle="title">
        {content.additionalContent?.title}
      </Typography>
      <Typography as="p" textStyle="desc">
        {content.additionalContent?.desc}
      </Typography>
    </Col>
  );
};

const YearlySalesFooter: React.FC<{ content: ChartCardContent }> = ({
  content,
}) => {
  console.log(content.additionalContent?.footer, 'content in footer');
  const footerContent = content.additionalContent?.footer || [];

  return (
    <Col col="col-2" justify="between" margin="px-5 py-0 m-0">
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

export {
  YearlyBackupContent,
  MonthlyEarningContent,
  DefaultContent,
  YearlySalesContent,
  YearlySalesFooter,
};
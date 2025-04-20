import { IconType } from 'react-icons';
import Button from '@components/Button';
import React from 'react';
import { TimelineItemType, PaymentItem } from '@components/_types/Card';
import Typography from '@components/Typography';
import Col from '@components/Col';

interface UpcomingActivityItemProps {
  icon: IconType;
  name: string;
  description: string;
  amount: string;
  bg: string;
  textColor: string;
}

const UpcomingActivityItem: React.FC<UpcomingActivityItemProps> = ({
  icon: Icon,
  name,
  description,
  amount,
  bg,
  textColor,
}) => (
  <div className="flex items-center py-3">
    {/* Icon container */}
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-full ${bg} ${textColor}`}
    >
      <Icon className="h-5 w-5" />
    </span>

    {/* Text content */}
    <Col className="mb-0 ml-4 mr-auto gap-y-0">
      <Typography textStyle="subtitle">{name}</Typography>
      <Typography textStyle="desc">{description}</Typography>
    </Col>

    {/* Amount/time */}
    <Typography textStyle="body">{amount}</Typography>
  </div>
);

interface TimelineItemProps {
  time: string;
  title: string;
  link?: string;
  type: string;
  isLast: boolean;
  badgeColor: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  link,
  isLast,
  badgeColor,
}) => (
  <div className="flex items-start space-x-4">
    <Typography as="div" textStyle="body" className="w-20 text-right">
      {time}
    </Typography>
    <div className="relative flex items-center">
      <span
        className={`mb-6 mt-2 h-4 w-4 rounded-full border-4 ${badgeColor}`}
      />
      {!isLast && (
        <span className="absolute left-1/2 top-6 -ml-px h-full w-0.5 bg-gray-200" />
      )}
    </div>
    <div className="flex-1">
      <Typography as="p" textStyle="body">
        {title}
      </Typography>
      {link && (
        <Typography as="a" href="#" textStyle="link">
          {link}
        </Typography>
      )}
    </div>
  </div>
);

interface TransactionItemProps {
  icon?: string | IconType;
  name: string;
  description: string;
  amount: string;
  bg?: string;
  textColor?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  icon,
  name,
  description,
  amount,
  bg = 'bg-gray-200',
  textColor = 'text-gray-700',
}) => {
  const Icon = icon as IconType;

  return (
    <div className="flex items-center py-2">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded ${bg} ${textColor}`}
      >
        {typeof icon === 'string' ? (
          <img src={icon} alt={name} className="h-5 w-5" />
        ) : icon ? (
          <Icon className="h-5 w-5" />
        ) : null}
      </span>
      <div className="ml-4 mr-auto">
        <Typography textStyle="subtitle">{name}</Typography>
        <Typography textStyle="desc">{description}</Typography>
      </div>
      <Typography textStyle="body">{amount}</Typography>
    </div>
  );
};

export const isPaymentItem = (
  item: PaymentItem | TimelineItemType
): item is PaymentItem => {
  return 'amount' in item && typeof item.amount === 'string';
};

export const isTimelineItem = (
  item: PaymentItem | TimelineItemType
): item is TimelineItemType => {
  return 'time' in item && typeof item.time === 'string';
};

const badgeColorMap: Record<TimelineItemType['type'], string> = {
  primary: 'border-blue-500',
  accent: 'border-purple-500',
  success: 'border-green-500',
  warning: 'border-yellow-500',
  error: 'border-red-500',
};

interface PaymentCardProps {
  title: string;
  desc: string;
  content: (PaymentItem | TimelineItemType)[];
}

export const PaymentCard: React.FC<PaymentCardProps> = ({
  title,
  desc,
  content,
}) => {
  const isUpcoming = title === 'Upcoming Activity';
  const isTimeline = title === 'Timeline Activity';
  const isPaymentGateway = title === 'Payment Gateways';

  return (
    <div className="w-full rounded-xl p-6 shadow-md dark:text-white">
      <Typography textStyle="title">{title}</Typography>
      <Typography textStyle="desc" className="mb-6">
        {desc}
      </Typography>

      {isUpcoming && (
        <div className="space-y-4">
          {content.filter(isPaymentItem).map((item, index) => {
            const paymentItem = item as PaymentItem;
            return (
              <UpcomingActivityItem
                key={index}
                icon={paymentItem.icon as IconType}
                name={paymentItem.name}
                description={paymentItem.description}
                amount={paymentItem.amount}
                bg={paymentItem.bg as string}
                textColor={paymentItem.textColor as string}
              />
            );
          })}
        </div>
      )}

      {isTimeline && (
        <div className="space-y-6">
          {content.filter(isTimelineItem).map((item, index, arr) => (
            <TimelineItem
              key={index}
              time={item.time}
              title={item.title}
              link={item.link}
              type={item.type}
              isLast={index === arr.length - 1}
              badgeColor={badgeColorMap[item.type]}
            />
          ))}
        </div>
      )}

      {isPaymentGateway && (
        <div className="space-y-6">
          {content.filter(isPaymentItem).map((item, index) => (
            <TransactionItem
              key={index}
              icon={item.icon}
              name={item.name}
              description={item.description}
              amount={item.amount}
              bg={item.bg}
              textColor={item.textColor}
            />
          ))}
          <Button color="secondary" className="mt-6 w-full">
            View all Transactions
          </Button>
        </div>
      )}
    </div>
  );
};
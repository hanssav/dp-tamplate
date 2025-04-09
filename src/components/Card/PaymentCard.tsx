import { IconType } from 'react-icons';
import Button from '../Button';
import React from 'react';
import { TimelineItemType, PaymentItem } from '../_types/Card';

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
  <div className="flex items-center py-4">
    {/* Icon container */}
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-full ${bg} ${textColor}`}
    >
      <Icon className="h-5 w-5" />
    </span>

    {/* Text content */}
    <div className="ml-4 mr-auto">
      <h4 className="text-base font-semibold text-gray-800 dark:text-white">
        {name}
      </h4>
      <p className="text-sm text-gray-500 dark:text-white">{description}</p>
    </div>

    {/* Amount/time */}
    <span className="text-sm text-gray-700 dark:text-white">{amount}</span>
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
  type,
  isLast,
  badgeColor,
}) => (
  <div className="flex items-start space-x-4">
    <div className="w-20 shrink-0 text-right text-sm">{time}</div>
    <div className="relative flex items-center">
      <span
        className={`mb-6 mt-2 h-4 w-4 rounded-full border-4 ${badgeColor}`}
      />
      {!isLast && (
        <span className="absolute left-1/2 top-4 -ml-px h-full w-0.5 bg-gray-200" />
      )}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-800 dark:text-white">
        {title}
      </p>
      {link && (
        <a href="#" className="text-sm text-blue-600 hover:underline">
          {link}
        </a>
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
    <div className="flex items-center">
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
        <h4 className="text-base font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <span className="text-sm font-semibold">{amount}</span>
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

const PaymentCard: React.FC<PaymentCardProps> = ({ title, desc, content }) => {
  const isUpcoming = title === 'Upcoming Activity';
  const isTimeline = title === 'Timeline Activity';

  return (
    <div className="w-full rounded-xl p-6 shadow-md dark:text-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-6 text-sm text-gray-500">{desc}</p>

      {isUpcoming ? (
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
      ) : isTimeline ? (
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
      ) : (
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
          <Button className="mt-6 w-full">View all Transactions</Button>
        </div>
      )}
    </div>
  );
};

export default PaymentCard;

import { LucideIcon } from 'lucide-react';
import Button from '@components/UI/Button';
import React from 'react';
import { TimelineItemType, PaymentItem } from '@components/_types/Card';
import Typography from '@components/UI/Typography';
import Box from '@components/UI/Box';

interface UpcomingActivityItemProps {
  icon: LucideIcon; // Change from IconType to LucideIcon
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
  <Box align="center" className="flex py-3">
    {/* Icon container */}
    <Button
      size="icon"
      color="light"
      className={`rounded-full ${bg} ${textColor}`}
    >
      <Icon className="size-5" />
    </Button>

    {/* Text content */}
    <Box className=" ml-4 mr-auto gap-y-0">
      <Typography textStyle="subtitle">{name}</Typography>
      <Typography textStyle="desc">{description}</Typography>
    </Box>

    {/* Amount/time */}
    <Typography textStyle="body">{amount}</Typography>
  </Box>
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
  <Box align="center" className="flex space-x-4">
    <Typography as="div" textStyle="body" className="w-20 text-right">
      {time}
    </Typography>
    <Box align="center" className="relative flex">
      <Typography
        as="span"
        className={`mb-6 mt-2 size-4 rounded-full border-4 ${badgeColor}`}
      />
      {!isLast && (
        <Typography
          as="span"
          className="absolute left-1/2 top-6 -ml-px h-full w-0.5 bg-gray-200"
        />
      )}
    </Box>
    <Box className="flex-1">
      <Typography as="p" textStyle="body">
        {title}
      </Typography>
      {link && (
        <Typography as="a" href="#" textStyle="link">
          {link}
        </Typography>
      )}
    </Box>
  </Box>
);

interface TransactionItemProps {
  icon?: string | LucideIcon; // Change from IconType to LucideIcon
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
  const Icon = icon as LucideIcon;

  return (
    <Box align="center" className="flex py-2">
      <Typography
        as="span"
        className={`flex size-10 items-center justify-center rounded ${bg} ${textColor}`}
      >
        {typeof icon === 'string' ? (
          <Typography as="img" src={icon} alt={name} className="size-5" />
        ) : icon ? (
          <Icon className="size-5" />
        ) : null}
      </Typography>
      <Box margin="ml-4 mr-auto">
        <Typography textStyle="subtitle">{name}</Typography>
        <Typography textStyle="desc">{description}</Typography>
      </Box>
      <Typography textStyle="body">{amount}</Typography>
    </Box>
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
  content: (PaymentItem | TimelineItemType)[]; // Content can contain PaymentItem or TimelineItem
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
    <Box className="w-full rounded-xl p-6 shadow-soft dark:text-white">
      <Typography textStyle="title">{title}</Typography>
      <Typography textStyle="desc" className="mb-6">
        {desc}
      </Typography>

      {isUpcoming && (
        <Box className="space-y-4">
          {content.filter(isPaymentItem).map((item, index) => {
            const paymentItem = item as PaymentItem;
            return (
              <UpcomingActivityItem
                key={index}
                icon={paymentItem.icon as LucideIcon}
                name={paymentItem.name}
                description={paymentItem.description}
                amount={paymentItem.amount}
                bg={paymentItem.bg as string}
                textColor={paymentItem.textColor as string}
              />
            );
          })}
        </Box>
      )}

      {isTimeline && (
        <Box className="space-y-6">
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
        </Box>
      )}

      {isPaymentGateway && (
        <Box className="space-y-6">
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
          <Button outlineColor="primary" className="mt-6">
            View all Transactions
          </Button>
        </Box>
      )}
    </Box>
  );
};

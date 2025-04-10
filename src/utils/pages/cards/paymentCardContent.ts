import { PaymentCardProps } from '../../../components/_types/Card';
import IMAGE_CONSTANTS from '../../../constant/images';
import {
  HiLocationMarker,
  HiArchive,
  HiUsers,
  HiClipboardCheck,
  HiMail,
} from 'react-icons/hi';

export const paymentData: PaymentCardProps[] = [
  {
    title: 'Payment Gateways',
    desc: 'Platform For Income',
    content: [
      {
        icon: IMAGE_CONSTANTS.PAYMENT_PAYPAL_ICON,
        name: 'Paypal',
        description: 'Big Brands',
        amount: '+$6235',
        bg: 'bg-blue-100',
        textColor: 'text-blue-600',
      },
      {
        icon: IMAGE_CONSTANTS.PAYMENT_WALLET_ICON,
        name: 'Wallet',
        description: 'Bill payment',
        amount: '+$345',
        bg: 'bg-green-100',
        textColor: 'text-green-600',
      },
      {
        icon: IMAGE_CONSTANTS.PAYMENT_CREDIT_CARD_ICON,
        name: 'Credit Card',
        description: 'Money reversed',
        amount: '+$2235',
        bg: 'bg-yellow-100',
        textColor: 'text-yellow-600',
      },
      {
        icon: IMAGE_CONSTANTS.PAYMENT_REFUND_ICON,
        name: 'Refund',
        description: 'Bill Payment',
        amount: '+$32',
        bg: 'bg-red-100',
        textColor: 'text-red-600',
      },
    ],
  },
  {
    title: 'Upcoming Activity',
    desc: 'In New year',
    content: [
      {
        icon: HiLocationMarker,
        name: 'Trip to Singapore',
        description: 'working on',
        amount: '5 mins',
        bg: 'bg-blue-100',
        textColor: 'text-blue-600',
      },
      {
        icon: HiArchive,
        name: 'Archived Data',
        description: 'working on',
        amount: '10 mins',
        bg: 'bg-purple-100',
        textColor: 'text-purple-600',
      },
      {
        icon: HiUsers,
        name: 'Meeting with Client',
        description: 'pending',
        amount: '15 mins',
        bg: 'bg-yellow-100',
        textColor: 'text-yellow-600',
      },
      {
        icon: HiClipboardCheck,
        name: 'Screening Task Team',
        description: 'pending',
        amount: '20 mins',
        bg: 'bg-red-100',
        textColor: 'text-red-600',
      },
      {
        icon: HiMail,
        name: 'Send envelope to John',
        description: 'done',
        amount: '20 mins',
        bg: 'bg-green-100',
        textColor: 'text-green-600',
      },
    ],
  },
  {
    title: 'Timeline Activity',
    desc: 'Recent Transactions',
    content: [
      {
        time: '09.30 am',
        title: 'Payment received from John Doe of $385.90',
        type: 'primary',
      },
      {
        time: '10.30 am',
        title: 'New sale recorded',
        link: '#ML-3467',
        type: 'accent',
      },
      {
        time: '12.30 pm',
        title: 'Payment was made of $64.95 to Michael',
        type: 'success',
      },
      {
        time: '12.30 pm',
        title: 'New sale recorded',
        link: '#ML-3467',
        type: 'warning',
      },
      {
        time: '01.40 am',
        title: 'check to add activity',
        link: '#ML-3467',
        type: 'error',
      },
    ],
  },
];

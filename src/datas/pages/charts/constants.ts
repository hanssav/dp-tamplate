export const MONTH_DATAS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const YEAR_DATAS = ['2020', '2021', '2022', '2023', '2024', '2025'];

export const YEARLY_SALES_ID = 'yearly-sales-chart';
export const MONTHLY_EARNING_ID = 'monthly-earning-chart';

export const POSITIONS = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
} as const;

export type Position = (typeof POSITIONS)[keyof typeof POSITIONS];

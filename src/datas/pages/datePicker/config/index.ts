import { MODE } from '@components/Datepicker/helpers/types';

export type DatepickerVariant = 'basic-datepicker' | 'custom-selection';

export const datepickerConfig: Record<DatepickerVariant, any[]> = {
  'basic-datepicker': [
    {
      id: 'basic-datepicker',
      placeholder: 'Choose a date',
      format: 'MM/dd/yyyy',
      mode: MODE.SINGLE,
    },
  ],
  'custom-selection': [
    {
      id: 'custom-selection',
      placeholder: 'Enter a date range',
      mode: MODE.SINGLE,
      autoRange: true,
      format: 'MM/dd/yyyy',
    },
  ],
};

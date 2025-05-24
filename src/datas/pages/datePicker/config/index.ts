import { MODE } from '@components/Datepicker/helpers/types';

export type DatepickerVariant = 'basic-datepicker' | 'custom-selection';

export const datepickerConfig: Record<DatepickerVariant, any[]> = {
  'basic-datepicker': [
    {
      id: 'basic-datepicker',
      label: 'Choose a date',
      placeholder: 'Choose a date',
      format: 'MM/dd/yyyy',
      mode: MODE.SINGLE,
    },
  ],
  'custom-selection': [
    {
      id: 'custom-selection',
      label: 'Enter a date range',
      placeholder: 'Choose a date',
      mode: MODE.SINGLE,
      autoRange: true,
      format: 'MM/dd/yyyy',
    },
  ],
};

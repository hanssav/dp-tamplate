import { MODE } from '@components/Datepicker/types';

export type DatepickerVariant = 'basic-datepicker' | 'custom-selection';

export const datepickerConfig: Record<DatepickerVariant, any[]> = {
  'basic-datepicker': [
    {
      id: 'basic-datepicker',
      label: 'Choose a date',
      placeholder: 'Choose a date',
      format: 'MM/dd/yyyy',
      mode: MODE.SINGLE,
      //   props: {datepicker, datepicker-buttons, datepicker-autoselect-today}
    },
  ],
  'custom-selection': [
    {
      id: 'custom-selection',
      label: 'Custom selection',
      placeholder: 'Choose a date',
      mode: MODE.SINGLE,
      autoRange: true,
      format: 'MM/dd/yyyy',
    },
  ],
};

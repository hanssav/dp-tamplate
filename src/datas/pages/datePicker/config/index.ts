import { INPUT_TYPES } from '@constant/components/InputTypes';

export type DatepickerVariant = 'basic-datepicker' | 'custom-selection';

export const datepickerConfig: Record<DatepickerVariant, any[]> = {
  'basic-datepicker': [
    {
      id: 'basic-datepicker',
      label: 'Basic datepicker',
      placeholder: 'Choose a date',
      format: 'MM/DD/YYYY',
      type: INPUT_TYPES.DATEPICKER,
      //   props: {datepicker, datepicker-buttons, datepicker-autoselect-today}
    },
  ],
  'custom-selection': [],
};

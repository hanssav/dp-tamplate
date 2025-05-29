import { MODE } from '@components/Datepicker/helpers/types';

export const ID_BASIC_DATEPICKER = 'basic-datepicker';
export const ID_CUSTOM_SELECTION_DATEPICKER = 'custom-selection';
export const ID_FORM_INTEGRATION_DATEPICKER = 'forms-integration';

export type DatepickerVariant =
  | 'basic-datepicker'
  | 'custom-selection'
  | 'forms-integration';

export const datepickerConfig: Record<DatepickerVariant, any[]> = {
  'basic-datepicker': [
    {
      id: ID_BASIC_DATEPICKER,
      placeholder: 'Choose a date',
      format: 'MM/dd/yyyy',
      mode: MODE.SINGLE,
    },
  ],
  'custom-selection': [
    {
      id: ID_CUSTOM_SELECTION_DATEPICKER,
      placeholder: 'Enter a date range',
      mode: MODE.SINGLE,
      autoRange: true,
      format: 'MM/dd/yyyy',
      labelFormat: 'MM/dd/yyyy - MM/dd/yyyy',
    },
  ],
  'forms-integration': [
    {
      id: ID_FORM_INTEGRATION_DATEPICKER,
      placeholder: 'Enter a date range',
      mode: MODE.SINGLE,
      autoRange: true,
      format: 'MM/dd/yyyy',
      labelFormat: 'MM/dd/yyyy - MM/dd/yyyy',
      result: true,
      results: {
        title: 'Selected Range: ',
        flex: true,
      },
    },
  ],
};

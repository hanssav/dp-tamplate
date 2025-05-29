import { MODE } from '@components/UI/Datepicker/helpers/types';

export const ID_BASIC_DATEPICKER = 'basic-datepicker';
export const ID_CUSTOM_SELECTION_DATEPICKER = 'custom-selection-datepicker';
export const ID_FORM_INTEGRATION_DATEPICKER = 'forms-integration-datepicker';
export const ID_ACTION_BUTTONS_DATEPICKER = 'action-button-datepicker';

export type DatepickerVariant =
  | typeof ID_BASIC_DATEPICKER
  | typeof ID_CUSTOM_SELECTION_DATEPICKER
  | typeof ID_FORM_INTEGRATION_DATEPICKER
  | typeof ID_ACTION_BUTTONS_DATEPICKER;

export const datepickerConfig: Record<DatepickerVariant, any[]> = {
  [ID_BASIC_DATEPICKER]: [
    {
      id: ID_BASIC_DATEPICKER,
      placeholder: 'Choose a date',
      format: 'MM/dd/yyyy',
      mode: MODE.SINGLE,
    },
  ],
  [ID_CUSTOM_SELECTION_DATEPICKER]: [
    {
      id: ID_CUSTOM_SELECTION_DATEPICKER,
      placeholder: 'Enter a date range',
      mode: MODE.SINGLE,
      autoRange: true,
      format: 'MM/dd/yyyy',
      labelFormat: 'MM/dd/yyyy - MM/dd/yyyy',
    },
  ],
  [ID_FORM_INTEGRATION_DATEPICKER]: [
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
  [ID_ACTION_BUTTONS_DATEPICKER]: [
    {
      id: `${ID_ACTION_BUTTONS_DATEPICKER}-singgle`,
      placeholder: 'Choose a date',
      format: 'MM/dd/yyyy',
      mode: MODE.SINGLE,
      isUseAction: true,
    },
    {
      id: `${ID_ACTION_BUTTONS_DATEPICKER}-range`,
      placeholder: 'Enter a date range',
      mode: MODE.SINGLE,
      autoRange: true,
      format: 'MM/dd/yyyy',
      labelFormat: 'MM/dd/yyyy - MM/dd/yyyy',
      isUseAction: true,
    },
  ],
};

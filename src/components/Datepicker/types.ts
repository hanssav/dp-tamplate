export const VIEW_MODE = {
  DAY: 'day',
  MONTH: 'month',
  YEAR: 'year',
} as const;

export type ViewMode = (typeof VIEW_MODE)[keyof typeof VIEW_MODE];

export const MODE = {
  SINGLE: 'single',
  RANGE: 'range',
  MULTIPLE: 'multiple',
  AUTO_RANGE: 'autoRange',
} as const;

export type Mode = (typeof MODE)[keyof typeof MODE];

export type SelectDate =
  | Date // for 'single'
  | Date[] // for 'multiple'
  | { from?: Date; to?: Date } // for 'range'
  | undefined;

export type DatepickerProps = {
  value?: Date;
  onChange?: (date: SelectDate) => void;
  placeholder?: string;
  format?: string;
  className?: string;
  id: string;
  mode?: Mode;
  autoRange?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export interface CreateDayPickerPropsArgs {
  mode?: Mode;
  selectedDate: SelectDate;
  handleSelect: (date: Date | undefined) => void;
  focusedDate: Date;
  setFocusedDate: (date: Date) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  viewMode: ViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  startYear: number;
  mappingOfYears: number[];
}

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
  AUTO_RANGE: 'autorange',
} as const;

export type Mode = (typeof MODE)[keyof typeof MODE];

export type SelectDate =
  | Date // single
  | Date[] // multiple
  | { from?: Date; to?: Date }
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

export interface UseSelectProps {
  mode: Mode;
  autoRange: boolean;
  onChange?: (value: SelectDate) => void;
  closePicker: () => void;
  focusedDate?: Date;
}

export interface DaypickerPopUpProps {
  selectedDate: SelectDate;
  handleSelect: (date: SelectDate) => void;
  focusedDate?: Date;
  setFocusedDate: (date: Date) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  viewMode: ViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
  startYear?: number;
  mode: Mode;
}

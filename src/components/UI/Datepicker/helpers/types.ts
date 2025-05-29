export type SelectDate =
  | Date // single
  | Date[] // multiple
  | { from?: Date | null; to?: Date | null }
  | undefined;

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

type SetSelectedDate = (date: SelectDate) => void;

export type DatepickerProps = {
  onChange?: (date: SelectDate) => void;
  id: string;
  selectedDate: SelectDate;
  setSelectedDate: SetSelectedDate;
  [key: string]: any; // for props
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
  item: any;
  onChange?: (value: SelectDate) => void;
  closePicker: () => void;
  focusedDate?: Date;
  selectedDate: SelectDate;
  setSelectedDate: SetSelectedDate;
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

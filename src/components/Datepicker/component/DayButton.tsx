import { DayButtonProps } from 'react-day-picker';
import { twMerge } from 'tailwind-merge';

export function DayButton({
  props,
  handleSelect,
}: {
  props: DayButtonProps;
  handleSelect: (day: Date) => void;
}) {
  const { day, modifiers, ...buttonProps } = props;

  const base_class =
    'h-10 w-10 rounded-full group-aria-selected:bg-orange-700 ';

  const default_class = 'rounded-full hover:bg-gray-300 hover:dark:bg-gray-700';
  const range_start_class =
    'rounded-full bg-primary text-white hover:bg-hover-primary';
  const range_end_class =
    'rounded-full bg-primary text-white hover:bg-hover-primary';
  const range_midle_class =
    'hover:bg-gray-300 dark:bg-gray-700 dark:bg-blue-700';

  const _class = modifiers.range_start
    ? range_start_class
    : modifiers.range_end
      ? range_end_class
      : modifiers.range_middle
        ? range_midle_class
        : default_class;

  return (
    <button
      {...buttonProps}
      className={twMerge(_class, base_class)}
      onClick={() => handleSelect(day.date)}
    />
  );
}

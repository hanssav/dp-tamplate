import { twMerge } from 'tailwind-merge';

export const classes = {
  wrapper: twMerge([
    'relative w-full rounded-md border border-gray-300',
    'focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500',
    'dark:border-gray-600 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-400',
  ]),

  input: (isSelect: boolean, disabled: boolean) =>
    twMerge([
      'peer w-full border-none bg-transparent text-black placeholder-transparent outline-none focus:outline-none focus:ring-0 dark:text-white dark:focus:bg-gray-800 dark:focus:text-white',
      isSelect && 'focus:outline-none focus:ring-0 dark:text-white',
      disabled && 'border-gray-300 text-gray-300 dark:border-gray-600 dark:text-gray-500',
    ]),

  label: (hasValue: any, isFocus: boolean, disabled: boolean) =>
    twMerge([
      'pointer-events-none absolute left-2 bg-white px-1 text-sm text-black dark:bg-gray-900',
      (hasValue || isFocus)
        ? '-top-2 text-xs text-blue-600 dark:text-blue-400'
        : 'left-2 top-2 bg-transparent text-gray-500 dark:bg-transparent dark:text-gray-400',
      disabled
        ? 'border-gray-300 text-gray-300 dark:border-gray-600 dark:text-gray-500'
        : 'dark:text-white',
    ]),

  dropdown: twMerge([
    'absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md border border-gray-300 bg-white text-black shadow-lg',
    'dark:border-gray-700 dark:bg-gray-800 dark:text-white',
  ]),

  listItem: twMerge([
    'cursor-pointer px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-900',
  ]),
};

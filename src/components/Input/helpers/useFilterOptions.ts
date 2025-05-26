import { useMemo } from 'react';

type Option = {
  label: string;
  value: string | number;
};

type GroupOption = {
  label: string;
  options: Option[];
};

export const useFilteredOptions = (
  query: string,
  options: Option[],
  groupOptions: GroupOption[] = []
) => {
  return useMemo(() => {
    const sourceOptions =
      groupOptions.length > 0
        ? groupOptions.flatMap(group => group.options)
        : options;

    return sourceOptions.filter(opt =>
      opt.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, options, groupOptions]);
};

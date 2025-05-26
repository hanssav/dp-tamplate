import { ListItems } from '@components/Input/components/ListItem';
import { classes } from '@components/Input/style';

type Options = {
  label: string;
  value: string | number;
};

interface OptionsProps {
  groupOptions?: {
    label: string;
    options: Options[];
  }[];
  filteredOptions: {
    label: string;
    value: string | number;
  }[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export function Options({
  groupOptions = [],
  filteredOptions,
  setQuery,
  setIsFocus,
  onChange,
}: OptionsProps) {
  const handleSelect = (option: { label: string; value: string | number }) => {
    const fakeEvent = {
      target: {
        value: option.value,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    setQuery(option.label);
    setIsFocus(false);
    onChange?.(fakeEvent);
  };

  return (
    <ul className={classes.dropdown}>
      {groupOptions.length > 0
        ? groupOptions.map(group => (
            <li key={group.label}>
              <div className="p-2">{group.label}</div>
              <ul>
                {group.options.map((opt, index) => (
                  <ListItems
                    key={index}
                    opt={opt}
                    index={index}
                    handleSelect={handleSelect}
                  />
                ))}
              </ul>
            </li>
          ))
        : filteredOptions.map((opt, index) => (
            <ListItems
              key={index}
              opt={opt}
              index={index}
              handleSelect={handleSelect}
            />
          ))}
    </ul>
  );
}

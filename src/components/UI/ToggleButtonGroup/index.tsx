import { useState, ComponentType } from 'react';
import { twMerge } from 'tailwind-merge';

interface ToggleOption {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

interface ToggleButtonGroupProps {
  options: string[];
  multiple?: boolean;
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
  iconOptions?: ComponentType<{ className?: string }>[];
  disabled?: boolean | boolean[];
}

export default function ToggleButtonGroup({
  options,
  multiple = false,
  defaultSelected = [],
  onChange,
  iconOptions,
  disabled = false,
}: ToggleButtonGroupProps) {
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const handleToggle = (option: string) => {
    const updated = multiple
      ? selected.includes(option)
        ? selected.filter(item => item !== option)
        : [...selected, option]
      : [option];

    setSelected(updated);
    onChange?.(updated);
  };

  const datas: (string | ToggleOption)[] =
    iconOptions && iconOptions.length > 0
      ? options.map((option, index) => ({
          name: option,
          icon: iconOptions[index],
        }))
      : options;

  const disabledList = Array.isArray(disabled) ? disabled : options.map(() => disabled ?? false);

  return (
    <div className="flex overflow-hidden rounded-md border border-gray-300 dark:border-gray-700">
      {datas.map((option, index) => {
        const isObj = typeof option === 'object';
        const name = isObj ? option.name : option;
        const Icon = isObj ? option.icon : null;
        const isActive = selected.includes(name);
        const isDisabled = disabledList[index];

        const buttonClass = twMerge(
          `flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 ${
            isActive
              ? 'bg-soft-blue text-blue-700 dark:bg-gray-600 dark:text-white'
              : 'dark:bg-dark-primary bg-white text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
          } ${isDisabled ? 'border-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-50 disabled:shadow-none' : ''}`
        );
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleToggle(name)}
            className={buttonClass}
            disabled={isDisabled}
          >
            {isActive && <span className="mr-2 text-lg">✓</span>}
            {Icon ? <Icon className="text-lg" /> : name}
          </button>
        );
      })}
    </div>
  );
}

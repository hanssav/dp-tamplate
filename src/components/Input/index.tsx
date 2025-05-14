import { ListItems } from '@components/Input/ListItem';
import {
  getDropdownClassNames,
  getInputClassNames,
  getLabelClassNames,
  getWrapperClassNames,
} from '@components/Input/style';
import { InputProps, INPUT_TYPES } from '@constant/components/InputTypes';
import React, { useState, useEffect, useRef } from 'react';

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = INPUT_TYPES.TEXT,
  value,
  onChange,
  options = [],
  groupOptions = [],
  disabled = false,
}) => {
  const isSelect = type === INPUT_TYPES.SELECT;
  const isDatepicker = type === INPUT_TYPES.DATEPICKER;

  const [query, setQuery] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<{ label: string; value: string | number }[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (groupOptions.length > 0) {
      const flattenedOptions = groupOptions
        .map(group => group.options)
        .flat()
        .filter(opt => opt.label.toLowerCase().includes(query.toLowerCase()));

      setFilteredOptions(flattenedOptions);
    } else {
      setFilteredOptions(options.filter(opt => opt.label.toLowerCase().includes(query.toLowerCase())));
    }

    if (disabled) {
      setQuery('');
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsFocus(false);
      }
      if (inputRef.current) {
        inputRef.current.value = '2025-05-12';
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: { label: string; value: string | number }) => {
    const fakeEvent = {
      target: {
        value: option.value,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    setQuery(option.label);
    setIsFocus(false);
    onChange(fakeEvent);
  };

  const handleSelectOnChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (!e.target.value) {
      setIsFocus(false);
      setQuery('');
    }
  };

  return (
    <div ref={wrapperRef} className={getWrapperClassNames()}>
      {isSelect ? (
        <div ref={wrapperRef} className={getWrapperClassNames()}>
          <input
            id={id}
            type="text"
            value={query}
            onChange={e => handleSelectOnChage(e)}
            placeholder=" "
            onFocus={() => setIsFocus(true)}
            className={getInputClassNames(isSelect, disabled)}
            disabled={disabled}
          />
          {isFocus && filteredOptions.length > 0 && (
            <ul className={getDropdownClassNames()}>
              {groupOptions.length > 0
                ? groupOptions.map(group => (
                    <li key={group.label}>
                      <div className="p-2">{group.label}</div>
                      <ul>
                        {group.options.map((opt, index) => (
                          <ListItems key={index} opt={opt} index={index} handleSelect={handleSelect} />
                        ))}
                      </ul>
                    </li>
                  ))
                : filteredOptions.map((opt, index) => (
                    <ListItems key={index} opt={opt} index={index} handleSelect={handleSelect} />
                  ))}
            </ul>
          )}
        </div>
      ) : isDatepicker ? (
        <div className="relative max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            id={id}
            ref={inputRef}
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="select-date"
            data-datepicker
            data-datepicker-buttons
            data-datepicker-autoselect-today
          />
        </div>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={getInputClassNames(isSelect, disabled)}
          inputMode={type === 'number' ? 'numeric' : undefined}
          disabled={disabled}
        />
      )}

      <label htmlFor={id} className={getLabelClassNames(query, isFocus, disabled)}>
        {label}
      </label>
    </div>
  );
};

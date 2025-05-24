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
  ...props
}) => {
  const isSelect = type === INPUT_TYPES.SELECT;
  const inputValue = value instanceof Date ? value.toISOString() : value;

  const [query, setQuery] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<
    { label: string; value: string | number }[]
  >([]);
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
      setFilteredOptions(
        options.filter(opt =>
          opt.label.toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    if (disabled) {
      setQuery('');
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
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
    onChange?.(fakeEvent);
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
            {...props}
          />
          {isFocus && filteredOptions.length > 0 && (
            <ul className={getDropdownClassNames()}>
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
          )}
        </div>
      ) : (
        <input
          id={id}
          type={type}
          value={inputValue}
          onChange={onChange}
          placeholder=" "
          className={getInputClassNames(isSelect, disabled)}
          inputMode={type === 'number' ? 'numeric' : undefined}
          disabled={disabled}
          onFocus={() => setIsFocus(true)}
          readOnly={props.readOnly}
          {...props}
        />
      )}
      <label
        htmlFor={id}
        className={getLabelClassNames(value, isFocus, disabled)}
      >
        {label}
      </label>
    </div>
  );
};

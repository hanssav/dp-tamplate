import {
  getDropdownClassNames,
  getInputClassNames,
  getLabelClassNames,
  getListItemClassNames,
  getWrapperClassNames,
} from '@components/Input/style';
import React, { useState, useEffect, useRef } from 'react';

interface InputProps {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'select';
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options?: { label: string; value: string | number }[];
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  options = [],
}) => {
  const isSelect = type === 'select';
  const [query, setQuery] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((opt) =>
        opt.label.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsFocus(false);
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
        <>
          <input
            id={id}
            type="text"
            value={query}
            onChange={(e) => handleSelectOnChage(e)}
            placeholder=" "
            onFocus={() => setIsFocus(true)}
            className={getInputClassNames(isSelect)}
          />
          {isFocus && filteredOptions.length > 0 && (
            <ul className={getDropdownClassNames()}>
              {filteredOptions.map((opt) => (
                <li
                  key={opt.value}
                  className={getListItemClassNames()}
                  onClick={() => handleSelect(opt)}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          className={getInputClassNames(isSelect)}
          inputMode={type === 'number' ? 'numeric' : undefined}
        />
      )}

      <label htmlFor={id} className={getLabelClassNames(query, isFocus)}>
        {label}
      </label>
    </div>
  );
};

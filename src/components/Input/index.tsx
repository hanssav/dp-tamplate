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
  groupOptions?: {
    label: string;
    options: { label: string; value: string | number }[];
  }[];
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  options = [],
  groupOptions = [],
  disabled = false,
}) => {
  const isSelect = type === 'select';
  const [query, setQuery] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<
    { label: string; value: string | number }[]
  >([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (groupOptions.length > 0) {
      const flattenedOptions = groupOptions
        .map((group) => group.options)
        .flat()
        .filter((opt) => opt.label.toLowerCase().includes(query.toLowerCase()));

      setFilteredOptions(flattenedOptions);
    } else {
      setFilteredOptions(
        options.filter((opt) =>
          opt.label.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);

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

  const renderOptions = (opt: any) => {
    if (opt.img) {
      return (
        <div className="flex items-center">
          <img src={opt.img} alt={opt.label} className="mr-2 h-8 w-12" />
          {opt.label} | population: {opt.population}
        </div>
      );
    }
    return opt.label;
  };

  const ListItems = ({ opt, index }: { opt: any; index: number }) => {
    return (
      <li
        key={index}
        className={getListItemClassNames()}
        onClick={() => handleSelect(opt)}
      >
        {renderOptions(opt)}
      </li>
    );
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
            className={getInputClassNames(isSelect, disabled)}
            disabled={disabled}
          />
          {isFocus && filteredOptions.length > 0 && (
            <ul className={getDropdownClassNames()}>
              {groupOptions.length > 0
                ? groupOptions.map((group) => (
                    <li key={group.label}>
                      <div className="p-2">{group.label}</div>
                      <ul>
                        {group.options.map((opt, index) => (
                          <ListItems opt={opt} index={index} />
                        ))}
                      </ul>
                    </li>
                  ))
                : filteredOptions.map((opt, index) => (
                    <ListItems opt={opt} index={index} />
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
          className={getInputClassNames(isSelect, disabled)}
          inputMode={type === 'number' ? 'numeric' : undefined}
          disabled={disabled}
        />
      )}

      <label
        htmlFor={id}
        className={getLabelClassNames(query, isFocus, disabled)}
      >
        {label}
      </label>
    </div>
  );
};

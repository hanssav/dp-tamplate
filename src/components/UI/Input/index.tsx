import { Options } from '@components/UI/Input/components/Options';
import { classes } from '@components/UI/Input/style';
import { useFilteredOptions } from '@components/UI/Input/helpers/useFilterOptions';
import { useClickOutside } from '@hooks/useClickOutside';
import React, { useState, useRef, useEffect } from 'react';
import { InputProps, INPUT_TYPES } from '@constant/components/InputTypes';
import { InputElement } from '@components/UI/Input/components/InputElement';

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const filteredOptions = useFilteredOptions(query, options, groupOptions);

  useClickOutside(wrapperRef, () => setIsFocus(false));
  useEffect(() => void (disabled && setQuery('')), [disabled]);

  const handleSelectOnChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (!e.target.value) {
      setIsFocus(false);
      setQuery('');
    }
  };

  const inputProps = {
    select: {
      id: id,
      type: 'text',
      value: query,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleSelectOnChage(e),
      onFocus: () => setIsFocus(true),
      className: classes.input(isSelect, disabled),
      disabled: disabled,
      ...props,
    },
    default: {
      id: id,
      type: type,
      value: inputValue,
      onChange: onChange,
      className: classes.input(isSelect, disabled),
      disabled: disabled,
      onFocus: () => setIsFocus(true),
      inputMode: type === 'number' ? ('numeric' as 'numeric') : undefined,
      readOnly: props.readOnly,
      ...props,
    },
  };

  return (
    <div ref={wrapperRef} className={classes.wrapper}>
      {isSelect ? (
        <div ref={wrapperRef} className={classes.wrapper}>
          <InputElement
            id={id}
            placeholder={placeholder}
            inputProps={inputProps['select']}
            classNameInput={classes.input(isSelect, disabled)}
            classNameLabel={classes.label(query, isFocus, disabled)}
          />
          {isFocus && filteredOptions.length > 0 && (
            <Options
              groupOptions={groupOptions}
              filteredOptions={filteredOptions}
              setQuery={setQuery}
              setIsFocus={setIsFocus}
              onChange={onChange}
              disabled={disabled}
            />
          )}
        </div>
      ) : (
        <InputElement
          id={id}
          placeholder={placeholder}
          inputProps={inputProps['default']}
          classNameInput={classes.input(isSelect, disabled)}
          classNameLabel={classes.label(inputValue, isFocus, disabled)}
        />
      )}
    </div>
  );
};

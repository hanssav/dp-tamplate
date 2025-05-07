import Box from '@components/Box';
import ToggleButtonGroup from '@components/ToggleButtonGroup';
import Typography from '@components/Typography';
import { toggleConfigs, ToggleVariant } from '@datas/pages/button/config/toggleConfig';
import React from 'react';

interface PreviewToggleProps {
  id: string;
  variant: ToggleVariant;
}

export const PreviewToggle = ({ id, variant }: PreviewToggleProps) => {
  const selected = toggleConfigs[variant].selected;
  const initialValue: string[] = Array.isArray(selected) ? selected : selected ? [selected] : [];

  const [value, setValue] = React.useState<string[]>(initialValue);
  return (
    <>
      <Box id={id} justify="start" className="mb-5 flex gap-x-1">
        <ToggleButtonGroup
          options={toggleConfigs[variant].options}
          multiple={toggleConfigs[variant].multiple}
          defaultSelected={toggleConfigs[variant].selected}
          onChange={selected => setValue(selected)}
          disabled={toggleConfigs[variant].disabled}
          iconOptions={toggleConfigs[variant].iconOptions}
        />
      </Box>
      {toggleConfigs[variant].showValue && (
        <Typography as="span" textStyle="body">
          chosen value: {value}
        </Typography>
      )}
    </>
  );
};

import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import Typography from '@components/Typography';

const RadioGroup = ({ item, selectedValue, onChange }: any) => (
  <Box className="flex gap-4">
    {item.title && (
      <Typography as="h4" textStyle="body" className="font-bold">
        {item.title}
      </Typography>
    )}
    {item.childItem?.map((child: any, idx: number) => (
      <Checkbox
        key={idx}
        className="mb-3"
        label={child.label}
        disabled={child.disabled}
        name={child.name}
        radio={child.radio}
        checked={selectedValue === child.value}
        onChange={() => onChange(child.value)}
      />
    ))}
  </Box>
);

export default RadioGroup;

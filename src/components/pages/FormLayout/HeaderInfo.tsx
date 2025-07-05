import Box from '@components/UI/Box';
import { HeaderForm } from '@datas/pages/formLayout/types';

function isHeader(item: any): item is HeaderForm {
  return (
    typeof item.label === 'string' &&
    typeof item.id === 'string' &&
    item.id.includes('header')
  );
}

const HeaderInfo = ({ item, index }: { item: HeaderForm; index: number }) => {
  const HeaderIcon = item.icon;
  return (
    <Box
      key={index}
      className="mb-4 flex items-center gap-2 rounded-lg bg-soft-blue p-4"
    >
      {HeaderIcon && <HeaderIcon className="size-5 text-primary" />}
      <h2 className="text-sm font-semibold text-primary">{item.label}</h2>
    </Box>
  );
};

export { isHeader, HeaderInfo };

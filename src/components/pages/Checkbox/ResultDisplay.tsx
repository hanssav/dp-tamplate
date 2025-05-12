import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import Typography from '@components/Typography';
import { twMerge } from 'tailwind-merge';

const ResultDisplay = ({ item, checkedChildren, checkedRadio }: any) => {
  const allKeys = ['pepperoni', 'extraCheese', 'mushroom'];

  const resultsDatas = allKeys.reduce(
    (acc, key) => {
      acc[key] = checkedChildren.includes(key);
      return acc;
    },
    {} as Record<string, boolean>
  );

  const resultsString = `{ ${Object.entries(resultsDatas)
    .map(([key, value]) => `"${key}": ${value}`)
    .join(', ')} }`;

  return (
    <Box
      className={twMerge(
        item.parentName && 'flex',
        'shodow-none gap-y-6 rounded-lg bg-[#f2f6fa] px-5 py-7 dark:border-gray-700 dark:bg-[#232e39]'
      )}
    >
      <Typography as="h4" textStyle="body" className="font-bold">
        {item.title}
      </Typography>

      {item.label ? (
        <Checkbox
          label={item.label}
          disabled={checkedRadio.config === 'disabled'}
          align={checkedRadio.align}
          checked={checkedRadio.config === 'checked'}
          indeterminate={checkedRadio.config === 'indeterminate'}
        />
      ) : item.showMultiple ? (
        <div className="text-sm text-gray-800 dark:text-current">
          <span>{resultsString}</span>
        </div>
      ) : (
        <span className="font-bold">&nbsp;{checkedRadio[item.parentName]}</span>
      )}
    </Box>
  );
};

export default ResultDisplay;

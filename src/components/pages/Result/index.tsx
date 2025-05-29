import Box from '@components/UI/Box';
import Typography from '@components/UI/Typography';
import { twMerge } from 'tailwind-merge';

const Result = ({ item, children }: any) => {
  const { results } = item;
  return (
    <Box
      className={twMerge(
        (item.parentName || results?.flex) && 'flex',
        'shodow-none gap-y-6 rounded-lg bg-[#f2f6fa] px-5 py-7 dark:border-gray-700 dark:bg-[#232e39]'
      )}
    >
      <Typography as="h4" textStyle="body" className="font-bold">
        {item.title || results?.title}
        {children}
      </Typography>
    </Box>
  );
};

export default Result;

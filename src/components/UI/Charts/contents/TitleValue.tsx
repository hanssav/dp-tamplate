import React from 'react';
import Typography from '@components/UI/Typography';
import { formatNumber } from '@utils/function';

interface TitleValueProps {
  title: string;
  value: string | number;
  position?: 'up' | 'down';
}

const TitleValue: React.FC<TitleValueProps> = ({
  title = '',
  value = '',
  position = 'up',
}) => {
  const valueItem = { text: formatNumber(value), style: 'title' as const };
  const titleItem = { text: title, style: 'body' as const };

  const items =
    position === 'down' ? [titleItem, valueItem] : [valueItem, titleItem];

  return (
    <>
      {items.map((item, idx) => (
        <Typography key={idx} as="p" textStyle={item.style}>
          {item.text}
        </Typography>
      ))}
    </>
  );
};

export default TitleValue;

import { classes } from '@components/UI/Input/style';
import React from 'react';

interface ListItemsProps {
  opt: {
    label: string;
    value: string | number;
    img?: string;
    population?: number;
  };
  index: number;
  handleSelect: (option: { label: string; value: string | number }) => void;
}

export const ListItems: React.FC<ListItemsProps> = ({
  opt,
  index,
  handleSelect,
}) => {
  return (
    <li
      key={index}
      className={classes.listItem}
      onClick={() => handleSelect(opt)}
    >
      {opt.img ? (
        <div className="flex items-center">
          <img src={opt.img} alt={opt.label} className="mr-2 h-8 w-12" />
          {opt.label} | population: {opt.population}
        </div>
      ) : (
        opt.label
      )}
    </li>
  );
};

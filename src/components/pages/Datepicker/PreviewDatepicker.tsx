import Box from '@components/Box';
import { formatISO } from 'date-fns';
import { Datepicker } from '@components/Datepicker';
import { SelectDate } from '@components/Datepicker/helpers/types';
import Result from '@components/pages/Result';
import {
  datepickerConfig,
  DatepickerVariant,
} from '@datas/pages/datePicker/config';
import { convertToObjectStirng } from '@utils/function';
import { useMemo, useState } from 'react';

export const PreviewDatepicker = ({
  id,
  variant,
}: {
  id: string;
  variant: DatepickerVariant;
}) => {
  const [selectedDate, setSelectedDate] = useState<SelectDate>({
    from: null,
    to: null,
  });

  const isoFormatted = useMemo(() => {
    if (
      selectedDate &&
      typeof selectedDate === 'object' &&
      !Array.isArray(selectedDate) &&
      'from' in selectedDate
    ) {
      return {
        from: selectedDate.from ? formatISO(selectedDate.from) : null,
        to: selectedDate.to ? formatISO(selectedDate.to) : null,
      };
    }
    return null;
  }, [selectedDate]);

  return (
    <Box id={id}>
      {datepickerConfig[variant].map((item, index) => {
        return (
          <div key={index}>
            <Datepicker
              id={item.id}
              item={item}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />

            {item.result && (
              <Result item={item}>
                {convertToObjectStirng(isoFormatted || {})}
              </Result>
            )}
          </div>
        );
      })}
    </Box>
  );
};
    
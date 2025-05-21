import Box from '@components/Box';
import { Datepicker } from '@components/Datepicker';
import {
  datepickerConfig,
  DatepickerVariant,
} from '@datas/pages/datePicker/config';

export const PreviewDatepicker = ({
  id,
  variant,
}: {
  id: string;
  variant: DatepickerVariant;
}) => {
  return (
    <Box id={id}>
      {datepickerConfig[variant].map((item, index) => {
        return <Datepicker key={index} id={item.id} mode={item?.mode} />;
      })}
    </Box>
  );
};

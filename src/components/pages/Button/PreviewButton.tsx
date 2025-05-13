import Box from '@components/Box';
import Button from '@components/Button';
import { buttonConfigs, ButtonVariant } from '@datas/pages/button/config/buttonConfig';

export const PreviewButtonGroup = ({ id, variant }: { id: string; variant: ButtonVariant }) => {
  return (
    <Box id={id} align="center" justify="center" className="flex flex-wrap gap-3 pb-4">
      {buttonConfigs[variant].map(({ label, props, icon }, index) => (
        <Button key={index} {...props}>
          {icon && label ? (
            <Box className="flex items-center justify-center gap-1">
              {icon} {label}
            </Box>
          ) : icon ? (
            icon
          ) : (
            label
          )}
        </Button>
      ))}
    </Box>
  );
};

import Button from '@components/Button';
import Box from '@components/Box';
import Typography from '@components/Typography';
import { SectionButton } from '@datas/pages/config';

interface DefaultContentProps {
  content: {
    title: string;
    button?: SectionButton[];
  };
  children?: React.ReactNode;
}

export const DefaultContent: React.FC<DefaultContentProps> = ({
  content,
  children,
}) => {
  const { title, button = [] } = content;

  return (
    <Box className="gap-5 p-5">
      <Box col="col-2" justify="between" align="center" className="flex">
        <Typography as="h2" textStyle="heading-md">
          {title}
        </Typography>
        <Box className="flex gap-2">
          {button.length > 0 &&
            button.map((btn, idx) => (
              <Button
                key={idx}
                color={btn.color}
                label={btn.label}
                onClick={btn.onclick}
              />
            ))}
        </Box>
      </Box>
      {children}
    </Box>
  );
};

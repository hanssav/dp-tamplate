import Typography from '@components/UI/Typography';
import { SectionButton } from '@datas/pages/config';
import HR from '@components/UI/HR';
import { twMerge } from 'tailwind-merge';
import { Tabs } from '@components/UI/Tabs';
import Box from '@components/UI/Box';
import Button from '@components/UI/Button';

interface DefaultContentProps {
  content: {
    title: string;
    button?: SectionButton[];
    [key: string]: any;
  };
  children?: React.ReactNode;
}

export const DefaultContent: React.FC<DefaultContentProps> = ({
  content,
  children,
}) => {
  const { title, button = [], config, tabData = [] } = content;
  const headerLine = config?.headerLine ?? false;
  const border = config?.border ?? 'border-none';
  const padding = config?.padding ?? 'p-0';
  const componentType = config?.componentType ?? null;
  const usePaddingInContent = config?.usePaddingInContent ?? false;
  const id = config.id ?? title;

  return (
    <Box className={twMerge('rounded-lg', border)}>
      <Box
        col="col-2"
        justify="between"
        align="center"
        className={twMerge('mt-3 flex', padding)}
      >
        <Typography as="h2" textStyle="title">
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
                {...btn.props}
              >
                {btn.label}
              </Button>
            ))}
        </Box>
      </Box>
      {headerLine && <HR />}
      <Box className={twMerge(usePaddingInContent ? padding : '')}>
        {componentType === 'tabs' && (
          <Tabs
            key={id}
            tabs={tabData}
            className={twMerge('gap-x-5')}
            paddingContent={padding}
          />
        )}
        {children}
      </Box>
    </Box>
  );
};

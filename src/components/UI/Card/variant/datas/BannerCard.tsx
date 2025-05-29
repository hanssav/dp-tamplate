import Box from '@components/UI/Box';
import Button from '@components/UI/Button';
import Typography, { TextStyle } from '@components/UI/Typography';
import {
  BannersSectionProps,
  CardContent,
  SectionContent,
} from '@datas/pages/config';

function isCardContent(item: SectionContent): item is CardContent {
  return (
    (item as CardContent).title !== undefined ||
    (item as CardContent).components !== undefined
  );
}

export const BannersCard: React.FC<BannersSectionProps> = ({ content }) => {
  if (!content) return <Box>No content available</Box>;

  const items = Array.isArray(content) ? content : [content];

  return (
    <>
      {items.map((item, index) => {
        if (!isCardContent(item)) {
          return <Box key={index}>Invalid item data</Box>;
        }

        const isTop = item.imagePosition === 'top';

        const wrapperClass = `flex flex-col ${isTop ? 'my-6' : 'md:flex-row-reverse'}`;
        const imageWrapperClass = !isTop
          ? 'flex h-full items-end justify-end md:w-1/2'
          : '';
        const imageClass = isTop
          ? 'mx-auto my-5 w-full max-w-[150px] rounded-full'
          : 'w-full max-w-[250px] translate-y-[30px]';
        const contentClass = `flex flex-col gap-y-6 ${isTop ? 'items-center text-center' : 'w-1/2'}`;
        const buttonWrapperClass = `flex gap-2 ${
          isTop ? 'items-center justify-center' : 'items-start justify-start'
        }`;

        const renderImage = () =>
          item.bgImage && (
            <Box className={imageWrapperClass}>
              <img
                src={item.bgImage}
                alt={item.title || 'banner image'}
                className={imageClass}
              />
            </Box>
          );

        const renderButtons = () =>
          item.button?.length ? (
            <Box className={buttonWrapperClass}>
              {item.button.map((btn, idx) => (
                <Button
                  key={idx}
                  onClick={btn.onclick}
                  color={btn.color}
                  size="md"
                  {...btn.props}
                >
                  {btn.label}
                </Button>
              ))}
            </Box>
          ) : null;

        return (
          <Box
            key={index}
            align="center"
            justify={!isTop ? 'between' : undefined}
            className={wrapperClass}
          >
            {item.preTitle && (
              <Typography
                textStyle={item.preTitle.style as TextStyle}
                as={item.preTitle.as}
              >
                {item.preTitle.text}
              </Typography>
            )}

            {renderImage()}

            <Box className={contentClass}>
              <Typography textStyle="heading-md" as="h2">
                {item.title}
              </Typography>

              {typeof item.subtitle === 'string' && (
                <Typography
                  textStyle="body"
                  as="p"
                  dangerouslySetInnerHTML={{ __html: item.subtitle }}
                />
              )}

              {renderButtons()}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

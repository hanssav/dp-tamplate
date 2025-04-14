import Button, { ButtonColor } from '@components/Button';
import Typography, { TextStyle } from '@components/Typography';
import {
  BannersSectionProps,
  CardContent,
  SectionContent,
} from '@datas/pages/config';

/**
 * Type guard to check if the item is of type CardContent.
 * 
 * @param item - The item to check.
 * @returns True if the item is a CardContent, false otherwise.
 */
function isCardContent(item: SectionContent): item is CardContent {
  return (
    (item as CardContent).title !== undefined ||
    (item as CardContent).components !== undefined
  );
}

/**
 * BannersCard Component
 * Renders a list of banner cards with images, titles, subtitles, and buttons.
 * 
 * @param {BannersSectionProps} props - The content for the banners.
 * @returns {JSX.Element} A list of banner cards, or a message if no content is available.
 */
export const BannersCard: React.FC<BannersSectionProps> = ({ content }) => {
  if (!content) return <div>No content available</div>;

  const items = Array.isArray(content) ? content : [content];

  return (
    <>
      {items.map((item, index) => {
        if (isCardContent(item)) {
          return (
            <div
              key={index}
              className={`flex ${
                item.imagePosition === 'top'
                  ? 'my-6 flex-col items-center'
                  : 'flex-col items-center justify-between py-0 md:flex-row-reverse'
              }`}
            >
              {/* Pre-Title */}
              {item.preTitle && (
                <Typography
                  textStyle={item.preTitle.style as TextStyle}
                  as={item.preTitle.as}
                >
                  {item.preTitle.text}
                </Typography>
              )}

              {/* Image */}
              {item.bgImage && (
                <div
                  className={`${
                    item.imagePosition === 'top'
                      ? ''
                      : 'flex h-full items-end justify-end md:w-1/2'
                  }`}
                >
                  <img
                    src={item.bgImage}
                    alt={item.title || 'banner image'}
                    className={`${
                      item.imagePosition === 'top'
                        ? 'mx-auto my-5 w-full max-w-[150px] rounded-full'
                        : 'w-full max-w-[250px] translate-y-[30px]'
                    }`}
                  />
                </div>
              )}

              {/* Content */}
              <div
                className={`flex flex-col gap-y-6 p-4 ${
                  item.imagePosition === 'top' ? 'items-center text-center' : 'w-1/2'
                }`}
              >
                <Typography textStyle="heading-md" as="h2">
                  {item.title}
                </Typography>
                <Typography
                  textStyle="body"
                  as="p"
                  dangerouslySetInnerHTML={{
                    __html: typeof item.subtitle === 'string' ? item.subtitle : '',
                  }}
                ></Typography>

                {/* Buttons */}
                <div
                  className={`flex gap-2 ${
                    item.imagePosition === 'top'
                      ? 'items-center justify-center'
                      : 'items-start justify-start'
                  }`}
                >
                  {item.button?.map((btn, idx) => (
                    <Button
                      key={idx}
                      onClick={btn.onclick}
                      color={btn.color as ButtonColor}
                      size="md"
                    >
                      {btn.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return <div key={index}>Invalid item data</div>;
      })}
    </>
  );
};

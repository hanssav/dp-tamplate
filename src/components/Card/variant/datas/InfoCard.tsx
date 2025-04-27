import { InfoCardContentProps } from '@components/_types/Card';
import Typography from '@components/Typography';
import Box from '@components/Box';
import { Avatar } from 'flowbite-react';

/**
 * `InfoCardContent` is a component that displays an informational card with an image,
 * a title, and a count.
 *
 * @component
 * @param {InfoCardContentProps} props - The props for the InfoCardContent component.
 * @param {object} props.content - The content object containing the data for the informational card.
 * @param {string} props.content.img - The URL of the image to be displayed in the card.
 * @param {string} props.content.title - The title text of the card.
 * @param {string|number} props.content.count - The count or value to be displayed on the card.
 *
 * @returns {JSX.Element} An informational card displaying an image, title, and count.
 */

export function InfoCardContent({ content }: InfoCardContentProps) {
  return (
    <Box className="justify-items-center">
      <Avatar img={content.img} alt={content.title} size="md" rounded />

      <Typography textStyle="subtitle" className="mt-3 text-current">
        {content?.title}
      </Typography>

      <Typography as="h6" textStyle="heading-md" className="text-current">
        {content?.count}
      </Typography>
    </Box>
  );
}

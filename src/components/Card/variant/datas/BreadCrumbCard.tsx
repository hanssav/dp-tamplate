import { Link } from 'react-router';
import FilledCircleIcon from '@assets/icons/FilledCircleIcon';
import Box from '@components/Box';
import { BreadcrumbProps } from '@components/_types/Card';
import Typography from '@components/Typography';

/**
 * `BreadcrumbCardContent` renders a breadcrumb-style header for a card.
 * It includes the title of the current section and a simple navigation path.
 *
 * @component
 * @param {BreadcrumbProps} props - The props for the breadcrumb content.
 * @param {object} props.content - The content object containing breadcrumb data.
 * @param {string} props.content.title - The title to be displayed as the current breadcrumb.
 *
 * @returns {JSX.Element} A component that renders breadcrumb navigation inside a card.
 */

export function BreadcrumbCardContent({ content }: BreadcrumbProps) {
  return (
    <Box className="gap-y-1">
      <Typography as="h3" textStyle="title" className="mb-2">
        {content?.title}
      </Typography>

      <Box align="center" className="flex gap-2">
        <Link to="/">
          <Typography textStyle="link">Dashboard</Typography>
        </Link>

        <FilledCircleIcon />

        <Typography textStyle="body">{content?.title}</Typography>
      </Box>
    </Box>
  );
}

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
    <Box col="col-1" className="gap-y-1">
      <Typography as="h3" textStyle="title" className="mb-2">
        {content?.title}
      </Typography>

      <div className="mb-4 flex items-center gap-2">
        <Link to="/">
          <Typography className="hover:text-blue-400" textStyle="body">
            Dashboard
          </Typography>
        </Link>

        <FilledCircleIcon />

        <Typography textStyle="body">{content?.title}</Typography>
      </div>
    </Box>
  );
}

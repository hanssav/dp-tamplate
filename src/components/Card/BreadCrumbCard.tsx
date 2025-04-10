import { Link } from 'react-router';
import FilledCircleIcon from '../../assets/icons/FilledCircleIcon';
import Col from '../Col';
import Typography from '../Typography';
import { BreadcrumbProps } from '../_types/Card';

export function BreadcrumbCardContent({ content }: BreadcrumbProps) {
  return (
    <Col className="gap-y-1">
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
    </Col>
  );
}

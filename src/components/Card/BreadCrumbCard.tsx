import { Link } from 'react-router';
import FilledCircleIcon from '../../assets/icons/FilledCircleIcon';
import { BreadcrumbProps } from '../_types/Card';

export function BreadcrumbCardContent({ content }: BreadcrumbProps) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">{content?.title}</h3>
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-800 dark:text-white">
        <Link to="/" className="hover:text-blue-400">
          Dashboard
        </Link>
        <FilledCircleIcon />
        <span>{content?.title}</span>
      </div>
    </div>
  );
}

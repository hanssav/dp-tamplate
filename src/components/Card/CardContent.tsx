import { Link } from 'react-router';
import FilledCircleIcon from '../../assets/icons/FilledCircleIcon';

export interface CardContentData {
  title?: string;
  subtitle?: string;
  count?: string;
  img?: string;
  bgImage?: string;
  type?: string;
}

interface RenderCardContentProps {
  variant?: 'breadcrumb' | 'info' | 'post';
  content?: CardContentData;
}

export function renderCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  switch (variant) {
    case 'breadcrumb':
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
    case 'info':
      return (
        <div className="justify-items-center">
          <img alt="users" src={content?.img} />
          <p className="mt-3 text-sm font-semibold">{content?.title}</p>
          <h6 className="text-xl font-bold">{content?.count}</h6>
        </div>
      );
    case 'post':
      return (
        <div>
          <h2 className="mb-3 text-2xl font-semibold">{content?.title}</h2>
        </div>
      );
    default:
      return null;
  }
}

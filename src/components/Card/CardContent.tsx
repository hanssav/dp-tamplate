import { Link } from 'react-router';
import FilledCircleIcon from '../../assets/icons/FilledCircleIcon';
import IMAGE_CONSTANTS from '../../constant/images';

export interface BaseCardContent {
  title?: string;
  subtitle?: string;
  count?: string;
  img?: string;
  bgImg?: string;
  type?: 'primary' | 'warning' | 'secondary' | 'error' | 'success';
}

export type CardContentData = BaseCardContent & {
  [key: string]: any;
};

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
          <div className="flex items-start justify-between">
            <img
              src={IMAGE_CONSTANTS.USER_PROFILE}
              alt="User profile"
              className="h-10 w-10 translate-y-[-45px] rounded-full object-cover"
            />
            <button
              type="button"
              className="translate-y-[-95px] rounded-lg border bg-gray-50 p-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              2 mins Read
            </button>
          </div>

          <button
            type="button"
            className="translate-y-[-25px] rounded-lg border bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
          >
            Social
          </button>

          <h2 className="text-lg font-semibold">{content?.title}</h2>

          <div className="mt-3 flex items-start justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1" title="Views">
                <span>👁️</span>
                <span>1.2k</span>
              </div>
              <div className="flex items-center gap-1" title="Comments">
                <span>💬</span>
                <span>328</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-500">●</span>
              <span>Mon, Dec 2024</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

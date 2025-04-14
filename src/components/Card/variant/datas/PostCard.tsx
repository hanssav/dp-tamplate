import { Avatar } from 'flowbite-react';
import Typography from '@components/Typography';
import { PostCardContentProps } from '@components/_types/Card';

/**
 * PostCardContent Component
 * Renders the content for a single post, including the user's avatar, post category,
 * title, views, comments, and last viewed information.
 * 
 * @param {Object} props - The component's props.
 * @param {PostCardContentProps} props.content - The content to be displayed in the post card.
 * 
 * @returns {JSX.Element} The PostCardContent component rendering the post details.
 */

export function PostCardContent({ content }: PostCardContentProps) {
  return (
    <div>
      {/* User Avatar and Last View Button */}
      <div className="flex items-start justify-between">
        <Avatar
          img={content?.userImg}
          alt="User profile"
          rounded
          size="md"
          className="translate-y-[-40px] rounded-full object-cover"
        />
        <Typography
          as="button"
          textStyle="desc"
          className="translate-y-[-95px] rounded-lg border bg-gray-50 p-2 hover:bg-gray-200 focus:outline-none"
        >
          {content?.lastView}
        </Typography>
      </div>

      {/* Category Button */}
      <Typography
        as="button"
        textStyle="desc"
        className="translate-y-[-25px] rounded-lg border bg-gray-100 p-2 hover:bg-gray-200 focus:outline-none"
      >
        {content?.category}
      </Typography>

      {/* Title of the Post */}
      <Typography as="h2" textStyle="title" className="mt-2">
        {content?.title}
      </Typography>

      {/* Post Details */}
      <div className="mt-3 flex items-start justify-between text-sm text-gray-500 dark:text-white">
        {/* Views and Comments */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1" title="Views">
            <span>👁️</span>
            <Typography as="span" textStyle="desc">
              {content?.views}
            </Typography>
          </div>
          <div className="flex items-center gap-1" title="Comments">
            <span>💬</span>
            <Typography as="span" textStyle="desc">
              {content?.comments}
            </Typography>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-blue-500">●</span>
          <Typography as="span" textStyle="desc">
            {content?.date}
          </Typography>
        </div>
      </div>
    </div>
  );
}

import { Avatar } from 'flowbite-react';
import Typography from '@components/UI/Typography';
import { PostCardContentProps } from '@components/_types/card';
import Box from '@components/UI/Box';
import Button from '@components/UI/Button';

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
    <>
      <Box align="start" justify="between" className="flex">
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
      </Box>

      <Button
        color="light"
        disabled
        size="md"
        className="w-fit translate-y-[-25px] rounded-lg border border-gray-300 bg-transparent"
      >
        {content?.category}
      </Button>

      <Typography as="h2" textStyle="title" className="mt-2">
        {content?.title}
      </Typography>

      <Box align="start" justify="between" className="mt-3 flex text-sm">
        <Box align="center" className="flex gap-4">
          <Box align="center" className="flex gap-1" title="Views">
            <span>👁️</span>
            <Typography as="span" textStyle="desc">
              {content?.views}
            </Typography>
          </Box>
          <Box align="center" className="flex gap-1" title="Comments">
            <span>💬</span>
            <Typography as="span" textStyle="desc">
              {content?.comments}
            </Typography>
          </Box>
        </Box>

        <Box align="center" className="flex gap-2">
          <span className="text-xs text-blue-500">●</span>
          <Typography as="span" textStyle="desc">
            {content?.date}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

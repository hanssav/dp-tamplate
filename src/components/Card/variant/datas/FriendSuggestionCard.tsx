import { Avatar } from 'flowbite-react';
import Button from '@components/Button';
import Typography from '@components/Typography';
import { FriendSuggestionCardProps } from '@components/_types/Card';
import Box from '@components/Box';

/**
 * `FriendSuggestionCardContent` is a component that displays a card for suggesting a friend.
 * It includes the user's avatar, name, mutual friends, and buttons to add or remove the friend.
 *
 * @component
 * @param {FriendSuggestionCardProps} props - The props for the FriendSuggestionCardContent component.
 * @param {object} props.content - The content object containing the data for the friend suggestion card.
 * @param {string} props.content.mainImage - The URL of the user's avatar image.
 * @param {string} props.content.name - The name of the user.
 * @param {string[]} props.content.mutualFriends - A list of URLs for the mutual friends' avatar images.
 * @param {number} props.content.mutualCount - The number of mutual friends between the user and the current user.
 *
 * @returns {JSX.Element} A friend suggestion card displaying the user's avatar, mutual friends, and action buttons.
 */

export const FriendSuggestionCardContent: React.FC<
  FriendSuggestionCardProps
> = ({ content }) => {
  return (
    <Box align="start" className="flex flex-col">
      <Avatar
        img={content.mainImage}
        alt={content.name}
        size="lg"
        rounded
        className="mb-4"
      />

      <Typography as="h5" textStyle="body" className="font-semibold">
        {content.name}
      </Typography>

      <Box align="center" className="mt-2 flex gap-2">
        <Box className="flex -space-x-2">
          {content.mutualFriends.map((img, idx) => (
            <Avatar
              key={idx}
              img={img}
              alt="mutual"
              size="xs"
              rounded
              className="border-2 border-white dark:border-gray-800"
            />
          ))}
        </Box>
        <Typography textStyle="desc" className="text-sm">
          {content.mutualCount} mutual friends
        </Typography>
      </Box>

      <Box margin="mt-5" className="w-full gap-2">
        <Button>Add Friend</Button>
        <Button color="secondary">Remove</Button>
      </Box>
    </Box>
  );
};

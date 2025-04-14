import { Avatar } from 'flowbite-react';
import Button from '@components/Button';
import Typography from '@components/Typography';
import { FriendSuggestionCardProps } from '@components/_types/Card';

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

export const FriendSuggestionCardContent: React.FC<FriendSuggestionCardProps> = ({ content }) => {
  return (
    <div className="flex flex-col py-5">
      {/* Avatar Pengguna */}
      <Avatar
        img={content.mainImage}
        alt={content.name}
        size="lg"
        rounded
        className="mb-4 h-[80px] w-[80px] object-cover"
      />

      {/* Nama Pengguna */}
      <Typography as="h5" textStyle="body" className="font-semibold">
        {content.name}
      </Typography>

      {/* Teman Bersama */}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex -space-x-2">
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
        </div>
        <Typography textStyle="desc" className="text-sm">
          {content.mutualCount} mutual friends
        </Typography>
      </div>

      {/* Tombol */}
      <Button className="mb-2 mt-6 w-full">Add Friend</Button>
      <Button color="secondary">Remove</Button>
    </div>
  );
};

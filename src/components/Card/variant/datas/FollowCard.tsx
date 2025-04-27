import { FollowContentProps } from '@components/_types/Card';
import { HiLocationMarker } from 'react-icons/hi';
import { Avatar } from 'flowbite-react';
import Button from '@components/Button';
import Typography from '@components/Typography';
import Box from '@components/Box';

/**
 * `FollowCardContent` is a component that displays user information in a card-like format.
 * It includes the user's avatar, name, location, and a follow button.
 *
 * @component
 * @param {FollowContentProps} props - The props for the Follow card content.
 * @param {object} props.content - The content object containing user data.
 * @param {string} props.content.bgUser - The URL of the user's avatar image.
 * @param {string} props.content.name - The name of the user.
 * @param {string} props.content.location - The user's location.
 *
 * @returns {JSX.Element} A card displaying the user's information and a follow button.
 */

export const FollowCardContent: React.FC<FollowContentProps> = ({
  content,
}) => {
  return (
    <Box justify="between" align="center" className="flex gap-4">
      <Box align="center" className="flex gap-x-3">
        <Avatar img={content?.bgUser} alt={content?.name} rounded size="md" />

        <Box className="flex flex-col gap-1">
          <Typography
            as="h4"
            textStyle="body"
            className="font-semibold leading-tight"
          >
            {content?.name}
          </Typography>

          <Box align="center" className="flex gap-1">
            <HiLocationMarker className="mr-1 h-3.5 w-3.5" />
            <Typography as="span" textStyle="desc">
              {content?.location}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Follow Button */}
      <Button color="primary" size="md">
        Follow
      </Button>
    </Box>
  );
};

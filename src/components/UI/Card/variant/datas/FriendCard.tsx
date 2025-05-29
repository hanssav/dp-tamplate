import { Avatar } from 'flowbite-react';
import { FriendCardProps } from '@components/_types/Card';
import { Users, Globe, Code, Instagram } from 'lucide-react';
import Typography from '@components/UI/Typography';
import Button from '@components/UI/Button';
import Box from '@components/UI/Box';

/**
 * `FriendCard` is a component that displays a user's profile picture, name, role, and social media platform icons.
 * It also includes buttons to visit the user's social media profiles such as Facebook, Twitter, GitHub, and Instagram.
 *
 * @component
 * @param {FriendCardProps} props - The props for the Friend card.
 * @param {object} props.content - The content object containing the user's data.
 * @param {string} props.content.image - The URL of the user's profile image.
 * @param {string} props.content.name - The name of the user.
 * @param {string} props.content.role - The role or position of the user.
 * @param {Array<string>} props.content.platforms - An array of social media platforms associated with the user (e.g., 'facebook', 'twitter').
 *
 * @returns {JSX.Element} A card displaying the user's profile with social media icons.
 */

export const FriendCard: React.FC<FriendCardProps> = ({ content }) => {
  // Map social media platforms to corresponding icons
  const iconMap: Record<string, JSX.Element> = {
    facebook: <Users className="text-blue-600" size={18} />,
    twitter: <Globe className="text-blue-400" size={18} />,
    github: <Code className="text-green-600" size={18} />,
    instagram: <Instagram className="text-pink-500" size={18} />,
  };

  return (
    <Box className="text-center">
      <Box className="gap-1 py-5">
        {/* Avatar */}
        <Avatar
          img={content.image}
          alt={content.name}
          size="lg"
          rounded
          className="mx-auto mb-4 object-cover"
        />

        {/* Name */}
        <Typography as="h5" textStyle="body" className="font-semibold">
          {content.name}
        </Typography>

        {/* Role */}
        <Typography as="p" textStyle="desc">
          {content.role}
        </Typography>
      </Box>

      {/* Social Media Buttons */}
      <Box
        justify="center"
        align="center"
        className="flex gap-1 bg-light-primary py-3 dark:bg-[#26334D]"
      >
        {content.platforms.map(platform => (
          <Button color="light" size="icon" pill key={platform}>
            {iconMap[platform]}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

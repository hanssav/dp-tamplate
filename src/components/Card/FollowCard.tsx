import { FollowContentProps } from '../_types/Card';
import { HiLocationMarker } from 'react-icons/hi';
import { Avatar } from 'flowbite-react';
import Button from '../Button';
import Typography from '../Typography'; // <- jangan lupa import

export const FollowCardContent: React.FC<FollowContentProps> = ({
  content,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Avatar + Name + Location */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <Avatar img={content?.bgUser} alt={content?.name} rounded size="md" />

        {/* Name & Location */}
        <div className="flex flex-col">
          <Typography
            as="h4"
            textStyle="body"
            className="font-semibold leading-tight"
          >
            {content?.name}
          </Typography>

          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <HiLocationMarker className="mr-1 h-3.5 w-3.5" />
            <Typography as="span" textStyle="desc">
              {content?.location}
            </Typography>
          </div>
        </div>
      </div>

      {/* Follow Button */}
      <Button color="primary" size="md">
        Follow
      </Button>
    </div>
  );
};

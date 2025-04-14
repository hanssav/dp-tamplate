import Button from '@components/Button';
import Typography from '@components/Typography'; 
import { FriendGiftCardProps } from '@components/_types/Card';
import { Gift } from 'lucide-react';

/**
 * `FriendGiftCard` is a component that displays a card for sending a gift to a friend.
 * The card includes the friend's name, a gift icon, an image, and a button to send the gift.
 *
 * @component
 * @param {FriendGiftCardProps} props - The props for the FriendGiftCard component.
 * @param {object} props.content - The content object containing the data for the gift card.
 * @param {string} props.content.name - The name of the friend.
 * @param {string} props.content.image - The URL of the friend's image.
 *
 * @returns {JSX.Element} A gift card displaying the friend's name, image, and a button to send a gift.
 */

export const FriendGiftCard: React.FC<FriendGiftCardProps> = ({ content }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl p-6 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Typography as="h3" textStyle="body" className="font-medium">
          {content?.name}
        </Typography>
        <Gift className="h-5 w-5 text-blue-600" />
      </div>

      {/* Image */}
      <img
        src={content?.image}
        alt={content?.name}
        className="mt-2 w-full rounded object-cover"
      />

      {/* Button */}
      <Button color="primary" size="md" className="mt-3 w-full">
        Gift to Friend ($50.00)
      </Button>
    </div>
  );
};

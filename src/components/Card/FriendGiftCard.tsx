import Button from '../Button';
import { FriendGiftCardProps } from '../_types/Card';
import { Gift } from 'lucide-react';

export const FriendGiftCard: React.FC<FriendGiftCardProps> = ({ content }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl p-6 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">{content?.name}</h3>
        <Gift className="h-5 w-5 text-blue-600" />
      </div>

      {/* Image */}
      <img
        src={content?.image || '/default.jpg'}
        alt={content?.name || 'Gift image'}
        className="mt-2 w-full rounded object-cover"
      />

      {/* Button */}
      <Button color="primary" size="md" className="mt-3 w-full">
        Gift to Friend ($50.00)
      </Button>
    </div>
  );
};

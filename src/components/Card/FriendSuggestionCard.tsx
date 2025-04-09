import { Avatar } from 'flowbite-react';
import Button from '../Button';
import { FriendSuggestionCardProps } from '../_types/Card';

const FriendSuggestionCardContent: React.FC<FriendSuggestionCardProps> = ({
  content,
}) => {
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
      <h5 className="text-base font-semibold">{content.name}</h5>

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
        <span className="text-sm">{content.mutualCount} mutual friends</span>
      </div>

      {/* Tombol */}
      <Button className="mb-2 mt-6 w-full">Add Friend</Button>
      <Button color="secondary">Remove</Button>
    </div>
  );
};

export default FriendSuggestionCardContent;

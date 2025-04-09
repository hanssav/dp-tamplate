import { Avatar } from 'flowbite-react';
import { FriendCardProps } from '../_types/Card';
import { Users, Globe, Code, Instagram } from 'lucide-react';

export const FriendCard: React.FC<FriendCardProps> = ({ content }) => {
  const iconMap: Record<string, JSX.Element> = {
    facebook: <Users className="text-blue-600" size={18} />,
    twitter: <Globe className="text-blue-400" size={18} />,
    github: <Code className="text-green-600" size={18} />,
    instagram: <Instagram className="text-pink-500" size={18} />,
  };

  return (
    <div className="text-center">
      <div className="py-5">
        <Avatar
          img={content.image}
          alt={content.name}
          size="lg"
          rounded
          className="mx-auto mb-4 object-cover"
        />
        <h5 className="text-lg font-semibold">{content.name}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {content.role}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 bg-light-primary py-3 dark:bg-[#26334D]">
        {content.platforms.map((platform) => (
          <button
            key={platform}
            className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {iconMap[platform]}
          </button>
        ))}
      </div>
    </div>
  );
};

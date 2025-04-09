import { MusicContentProps } from '../_types/Card';
import { SkipBack, Play, SkipForward } from 'lucide-react';

export const MusicCardContent: React.FC<MusicContentProps> = ({ content }) => {
  return (
    <>
      <div className="gap-1">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {content?.title}
        </h5>
        <p className="text-gray-600 dark:text-gray-300">{content?.artis}</p>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <SkipBack className="h-4 w-4 text-black dark:text-white" />
        <Play className="h-4 w-4 text-black dark:text-white" />
        <SkipForward className="h-4 w-4 text-black dark:text-white" />
      </div>
    </>
  );
};

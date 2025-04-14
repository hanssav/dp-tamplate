import { MusicContentProps } from '@components/_types/Card';
import { SkipBack, Play, SkipForward } from 'lucide-react';
import Typography from '@components/Typography';

export const MusicCardContent: React.FC<MusicContentProps> = ({ content }) => {
  return (
    <div className="flex min-w-0 flex-col">
      {' '}
      <div className="flex min-w-0 flex-1 flex-col">
        <Typography as="h5" textStyle="title" className="max-w-full truncate">
          {content?.title}
        </Typography>
        <Typography as="p" textStyle="desc" className="max-w-full truncate">
          {content?.artis}
        </Typography>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <SkipBack className="h-4 w-4 text-black dark:text-white" />
        <Play className="h-4 w-4 text-black dark:text-white" />
        <SkipForward className="h-4 w-4 text-black dark:text-white" />
      </div>
    </div>
  );
};
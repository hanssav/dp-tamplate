import { MusicContentProps } from '../_types/Card';
import { SkipBack, Play, SkipForward } from 'lucide-react';
import Typography from '../Typography';

export const MusicCardContent: React.FC<MusicContentProps> = ({ content }) => {
  return (
    <>
      <div className="gap-0">
        <Typography as="h5" textStyle="title">
          {content?.title}
        </Typography>

        <Typography as="p" textStyle="desc">
          {content?.artis}
        </Typography>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <SkipBack className="h-4 w-4 text-black dark:text-white" />
        <Play className="h-4 w-4 text-black dark:text-white" />
        <SkipForward className="h-4 w-4 text-black dark:text-white" />
      </div>
    </>
  );
};

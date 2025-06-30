import { MusicContentProps } from '@components/_types/Card';
import { SkipBack, Play, SkipForward } from 'lucide-react';
import Typography from '@components/UI/Typography';
import Box from '@components/UI/Box';

/**
 * `MusicCardContent` is a component that displays a music card with the title, artist,
 * and music controls (previous, play, next).
 *
 * @component
 * @param {MusicContentProps} props - The props for the MusicCardContent component.
 * @param {object} props.content - The content object containing the data for the music card.
 * @param {string} props.content.title - The title of the music track.
 * @param {string} props.content.artis - The artist of the music track.
 *
 * @returns {JSX.Element} A music card displaying the title, artist, and music controls.
 */

export const MusicCardContent: React.FC<MusicContentProps> = ({ content }) => {
  return (
    <Box className="flex flex-col">
      <Box className="flex flex-1 flex-col">
        {/* Music Title */}
        <Typography as="h5" textStyle="title" className="max-w-full truncate">
          {content?.title}
        </Typography>

        {/* Artist Name */}
        <Typography as="p" textStyle="desc" className="max-w-full truncate">
          {content?.artis}
        </Typography>
      </Box>

      {/* Music Controls */}
      <Box margin="center" className="mt-2 flex gap-4">
        <SkipBack className="size-4 text-black dark:text-white" />
        <Play className="size-4 text-black dark:text-white" />
        <SkipForward className="size-4 text-black dark:text-white" />
      </Box>
    </Box>
  );
};

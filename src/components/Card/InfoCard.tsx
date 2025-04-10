import { InfoCardContentProps } from '../_types/Card';
import Typography from '../Typography';

export function InfoCardContent({ content }: InfoCardContentProps) {
  return (
    <div className="justify-items-center">
      <img alt={content?.title} src={content?.img} />

      <Typography textStyle="subtitle" className="mt-3 text-current">
        {content?.title}
      </Typography>

      <Typography as="h6" textStyle="heading-md" className="text-current">
        {content?.count}
      </Typography>
    </div>
  );
}

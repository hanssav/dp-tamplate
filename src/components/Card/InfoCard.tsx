import { InfoCardContentProps } from '../_types/Card';

export function InfoCardContent({ content }: InfoCardContentProps) {
  return (
    <div className="justify-items-center">
      <img alt={content?.title} src={content?.img} />
      <p className="mt-3 text-sm font-semibold">{content?.title}</p>
      <h6 className="text-xl font-bold">{content?.count}</h6>
    </div>
  );
}

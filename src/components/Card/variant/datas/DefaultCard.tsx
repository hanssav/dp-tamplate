import Button from '@components/Button';
import Col from '@components/Col';
import Typography from '@components/Typography';
import { SectionButton } from '@datas/pages/config';

interface DefaultContentProps {
  content: {
    title: string;
    button?: SectionButton[];
  };
  children?: React.ReactNode;
}

export const DefaultContent: React.FC<DefaultContentProps> = ({
  content,
  children,
}) => {
  const { title, button = [] } = content;

  return (
    <Col className="gap-5 p-5">
      <Col col="col-2" className="flex items-center justify-between mb-5">
        <Typography as="h2" textStyle="heading-md">
          {title}
        </Typography>
        <Col className="flex gap-2">
          {button.length > 0 &&
            button.map((btn, idx) => (
              <Button
                key={idx}
                color={btn.color}
                label={btn.label}
                onClick={btn.onclick}
              />
            ))}
        </Col>
      </Col>
      {children}
    </Col>
  );
};

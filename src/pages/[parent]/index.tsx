import { Navigate, useLocation } from 'react-router';
import Card from '@components/Card';
import Col from '@components/Col';
import DashboardLayout from '@components/DashboardLayout';
import IMAGE_CONSTANTS from '@constant/images';
import { checkValidPath, getTitleFromPath } from '@utils/function';
import { cardSections } from '@datas/pages/cards';

const ParentMenu = () => {
  const location = useLocation();

  const isValid = checkValidPath(location.pathname);

  if (isValid === '404') {
    return <Navigate to="/404" replace />;
  }

  const title = getTitleFromPath(location.pathname);
  return (
    <DashboardLayout>
      <Card
        variant="breadcrumb"
        content={{ title: title, bgImg: IMAGE_CONSTANTS.BREADCRUMB_BG }}
      />

      {cardSections.map(({ col, data, variant, horizontal }, idx) => (
        <Col key={idx} col={col}>
          {data.map((item, index) => (
            <Card
              key={index}
              variant={variant}
              content={item}
              horizontal={horizontal}
            />
          ))}
        </Col>
      ))}
    </DashboardLayout>
  );
};

export default ParentMenu;

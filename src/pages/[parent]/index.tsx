import { Navigate, useLocation } from 'react-router';
import { Card } from '../../components/Card';
import Col from '../../components/Col';
import DashboardLayout from '../../components/DashboardLayout';
import IMAGE_CONSTANTS from '../../constant/images';
import { checkValidPath, getTitleFromPath } from '../../utils/function';
import infoCardContent from '../../utils/pages/cards/constants';

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
        content={{ title: title, bgImage: IMAGE_CONSTANTS.BREADCRUMB_BG }}
      />

      <Col col="col-6">
        {infoCardContent.map((item, index) => (
          <Card key={index} variant="info" content={item} />
        ))}
      </Col>
    </DashboardLayout>
  );
};

export default ParentMenu;

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
        content={{ title: title, bgImg: IMAGE_CONSTANTS.BREADCRUMB_BG }}
      />

      <Col col="col-6">
        {infoCardContent.map((item, index) => (
          <Card key={index} variant="info" content={item} />
        ))}
      </Col>

      <Col col="col-3">
        <Card
          variant="post"
          content={{
            title:
              'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
            category: 'Social',
            userImg: IMAGE_CONSTANTS.POST_USER_IMG_1,
            bgImg: IMAGE_CONSTANTS.POST_BG_1,
          }}
        ></Card>
        <Card
          variant="post"
          content={{
            title:
              'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
            category: 'Social',
            userImg: IMAGE_CONSTANTS.POST_USER_IMG_1,
            bgImg: IMAGE_CONSTANTS.POST_BG_1,
          }}
        ></Card>
        <Card
          variant="post"
          content={{
            title:
              'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
            category: 'Social',
            userImg: IMAGE_CONSTANTS.POST_USER_IMG_1,
            bgImg: IMAGE_CONSTANTS.POST_BG_1,
          }}
        ></Card>
      </Col>
    </DashboardLayout>
  );
};

export default ParentMenu;

import { useLocation } from 'react-router';
import { Card } from '../../components/Card';
import DashboardLayout from '../../components/DashboardLayout';
import IMAGE_CONSTANTS from '../../constant/images';
import { getTitleFromPath } from '../../utils/getTitleFromPath';

const ParentMenu = () => {
  const location = useLocation();

  const title = getTitleFromPath(location.pathname);
  return (
    <DashboardLayout>
      <Card
        title={title}
        border={false}
        bgColor="bg-ligth-primary"
        bgImage={IMAGE_CONSTANTS.BREADCRUMB_BG}
        className="p-10"
      />
    </DashboardLayout>
  );
};

export default ParentMenu;

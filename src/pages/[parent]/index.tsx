import { Navigate, useLocation } from 'react-router';
import Card from '@components/Card';
import DashboardLayout from '@components/DashboardLayout';
import IMAGE_CONSTANTS from '@constant/images';
import { checkValidPath, getTitleFromPath, toCamelCase } from '@utils/function';
import * as UiConfig from '@datas/pages/config';
import { useEffect, useState } from 'react';
import { SectionContent } from '@datas/pages/config';
import UiSection from '@components/UiRenderer/UiSection';

const ParentMenu = () => {
  const location = useLocation();
  const [uiConfig, setUiConfig] = useState<SectionContent[]>([]);

  const isValid = checkValidPath(location.pathname);

  if (isValid === '404') {
    return <Navigate to="/404" replace />;
  }
  const title = getTitleFromPath(location.pathname);

  useEffect(() => {
    const configKey = toCamelCase(title);
    const selectedConfig = UiConfig[configKey as keyof typeof UiConfig];

    setUiConfig(selectedConfig ?? []);
  }, [location]);

  return (
    <DashboardLayout>
      <Card
        variant="breadcrumb"
        content={{ title: title, bgImg: IMAGE_CONSTANTS.BREADCRUMB_BG }}
      />

      {uiConfig.map((section, idx) => (
        <UiSection key={idx} section={section} />
      ))}
    </DashboardLayout>
  );
};

export default ParentMenu;

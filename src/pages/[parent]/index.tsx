import { Navigate, useLocation } from 'react-router';
import Card from '@components/Card';
import Col from '@components/Col';
import DashboardLayout from '@components/DashboardLayout';
import IMAGE_CONSTANTS from '@constant/images';
import { checkValidPath, getTitleFromPath, toCamelCase } from '@utils/function';
import * as UiConfig from '@datas/pages/config';
import { useEffect, useState } from 'react';
import { GenericSectionProps } from '@datas/pages/config';

const ParentMenu = () => {
  const location = useLocation();
  const [uiConfig, setUiConfig] = useState<GenericSectionProps[]>([]);

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

      {uiConfig.map(({ col, data, variant, horizontal }, idx) => (
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

import { Navigate, useLocation } from 'react-router';
import DashboardLayout from '@components/UI/DashboardLayout';
import IMAGE_CONSTANTS from '@constant/images';
import { checkValidPath, getTitleFromPath, toCamelCase } from '@utils/function';
import * as UiConfig from '@datas/pages/config';
import { useEffect } from 'react';
import Box from '@components/UI/Box';
import { DynamicCard } from '@components/UI/Card/CardContent';
import { useSection } from '@context/useSection';
import UiSection from '@components/UI/UiRenderer/UiSection';

const ParentMenu = () => {
  const location = useLocation();
  const { section, updateSection } = useSection();

  const isValid = checkValidPath(location.pathname);
  if (isValid === '404') return <Navigate to="/404" replace />;

  const title = getTitleFromPath(location.pathname);

  useEffect(() => {
    document.title = title + ' - Admin';
  }, [title]);

  useEffect(() => {
    const configKey = toCamelCase(title);
    const selectedConfig = UiConfig[configKey as keyof typeof UiConfig];

    updateSection(Array.isArray(selectedConfig) ? selectedConfig : []);
  }, [location]);

  return (
    <DashboardLayout>
      <Box margin="mb-6">
        <DynamicCard variant="breadcrumb" content={{ title, bgImg: IMAGE_CONSTANTS.BREADCRUMB_BG }} />
      </Box>

      {section.sectionData.map((sec, idx) => (
        <UiSection key={idx} section={sec} />
      ))}
    </DashboardLayout>
  );
};

export default ParentMenu;
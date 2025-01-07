import React, { Suspense, lazy } from 'react';
import '../config/i18n';
import { useResponsive } from '../hooks';
import { LoadingPage } from '../views/LoadingPage';
import './microfe.scss';

const MicroFEDesktop = lazy(() => import('../views/MicroFEDesktop'));
const MicroFEMobile = lazy(() => import('../views/MicroFEMobile'));

export const MicroFE = (): React.ReactElement => {
  const isMobile = useResponsive();
  return (
    <Suspense fallback={<LoadingPage />}>
      {isMobile ? <MicroFEMobile /> : <MicroFEDesktop />}
    </Suspense>
  );
};

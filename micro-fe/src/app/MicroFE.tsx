import React, { Suspense, lazy, useEffect, useState } from 'react';
import '../config/i18n';
import { MOBILE_BREAKPOINT } from '../consts';
import { LoadingPage } from '../views/LoadingPage';
import './microfe.scss';

const MicroFEDesktop = lazy(() => import('../views/MicroFEDesktop'));
const MicroFEMobile = lazy(() => import('../views/MicroFEMobile'));

export const MicroFE = (): React.ReactElement => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Suspense fallback={<LoadingPage />}>
      {isMobile ? <MicroFEMobile /> : <MicroFEDesktop />}
    </Suspense>
  );
};

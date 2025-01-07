import React, { lazy, Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { LoadingPage, PageNotFound } from '../views';

const MicroFE = lazy(() => import('@jk/micro-fe'));

export const App = (): React.ReactElement => (
  <Router>
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path='/' element={<MicroFE />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

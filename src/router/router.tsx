import { HomePage } from 'pages';
import { MainLayout } from 'pages/MainLayout/MainLayout';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.PROFILE} />
      <Route path={ROUTE.SIGN_UP} />
      <Route path={ROUTE.SIGN_IN} />
    </Route>,
  ),
);

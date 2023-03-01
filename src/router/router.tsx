import {
  HomePage,
  MainLayout,
  NewPasswordPage,
  ProfileLayout,
  RegistrationPage,
  ResetPasswordPage,
  SettingsPage,
  SignInPage,
} from 'pages';
import { AdminPageLayout } from 'pages/AdminPage/AdminPageLayout/AdminPageLayout';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { IUserSlice } from 'store/types';

import { ProtectedAdminPage } from './ProtectedAdminPage';

import { ROUTE } from './routes';

export const router = (user: IUserSlice) => {
  console.log(user);
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTE.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={ROUTE.PROFILE} element={<ProfileLayout />}>
          <Route index element={<div />} />
          <Route path={ROUTE.PROFILE_SETTINGS} element={<SettingsPage />} />
        </Route>
        <Route path={ROUTE.SIGN_UP} element={<RegistrationPage />} />
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />}>
          <Route path={`${ROUTE.RESET_PASSWORD}/:token`} element={<SignInPage />} />
        </Route>
        <Route path={ROUTE.NEW_PASSWORD} element={<NewPasswordPage />} />
        <Route
          path={ROUTE.ADMIN}
          element={
            <ProtectedAdminPage user={user}>
              <AdminPageLayout />
            </ProtectedAdminPage>
          }
        >
          <Route path={`${ROUTE.ADMIN}/:PAGE`} element={<div>Страница</div>} />
        </Route>
      </>,
    ),
  );
};

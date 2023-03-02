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
import { ProfileDashboardPage } from 'pages/ProfileDashboardPage/ProfileDashboardPage';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { IUser } from 'store/types';

import { ProtectedAdminPage } from './ProtectedAdminPage';

import { ROUTE } from './routes';

export const router = (user: IUser) =>
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTE.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={ROUTE.PROFILE} element={<ProfileLayout />}>
          <Route path={ROUTE.PROFILE} element={<ProfileDashboardPage />}>
            <Route path={ROUTE.PROFILE_FAVORITE} element={<div>Избранное</div>} />
            <Route path={ROUTE.PROFILE_HISTORY} element={<div>История поиска</div>} />
          </Route>
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
        />
      </>,
    ),
  );

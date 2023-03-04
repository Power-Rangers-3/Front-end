import {
  HomePage,
  MainLayout,
  NewPasswordPage,
  ProfileLayout,
  RegistrationPage,
  ResetPasswordPage,
  ProfileSettingsPage,
  SignInPage,
  AdminPageLayout,
  ProfileDashboardPage,
  ProfileFavoritePage,
  ProfileHistoryPage,
  PlatformsPage,
} from 'pages';

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
          <Route path={ROUTE.PLATFORMS} element={<PlatformsPage />} />
        </Route>
        <Route path={ROUTE.PROFILE} element={<ProfileLayout />}>
          <Route path={ROUTE.PROFILE} element={<ProfileDashboardPage />}>
            <Route index path={ROUTE.PROFILE_FAVORITE} element={<ProfileFavoritePage />} />
            <Route path={ROUTE.PROFILE_HISTORY} element={<ProfileHistoryPage />} />
          </Route>
          <Route path={ROUTE.PROFILE_SETTINGS} element={<ProfileSettingsPage />} />
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

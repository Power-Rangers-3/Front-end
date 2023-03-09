import { ProtectedAdmin, ProtectedAuth, ProtectedUnAuth } from 'components';

import { AdminLayout, MainLayout, ProfileLayout } from 'layouts';
import {
  HomePage,
  NewPasswordPage,
  RegistrationPage,
  ResetPasswordPage,
  ProfileSettingsPage,
  SignInPage,
  ProfileDashboardPage,
  ProfileFavoritePage,
  ProfileHistoryPage,
  PlatformsPage,
  ProfilePlatforms,
  PlatformDetailsPage,
} from 'pages';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { IUser } from 'store/types';

import { ROUTE } from './routes';

export const router = (user: IUser) =>
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTE.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTE.PLATFORMS} element={<PlatformsPage />} />
        </Route>
        <Route element={<ProtectedAuth user={user} />}>
          <Route path={ROUTE.PROFILE} element={<ProfileLayout />}>
            <Route path={ROUTE.PROFILE} element={<ProfileDashboardPage />}>
              <Route index path={ROUTE.PROFILE_FAVORITE} element={<ProfileFavoritePage />} />
              <Route path={ROUTE.PROFILE_HISTORY} element={<ProfileHistoryPage />} />
            </Route>
            <Route path={ROUTE.PROFILE_PLATFORMS} element={<ProfilePlatforms />} />
            <Route path={ROUTE.PROFILE_SETTINGS} element={<ProfileSettingsPage />} />
          </Route>
          <Route path={ROUTE.PLATFORMS_DETAILS} element={<PlatformDetailsPage />} />
        </Route>
        <Route element={<ProtectedUnAuth user={user} />}>
          <Route path={ROUTE.SIGN_UP} element={<RegistrationPage />} />
          <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />}>
            <Route path={`${ROUTE.RESET_PASSWORD}/:params`} element={<SignInPage />} />
          </Route>
          <Route path={ROUTE.NEW_PASSWORD} element={<NewPasswordPage />} />
        </Route>
        <Route element={<ProtectedAdmin user={user} />}>
          <Route path={ROUTE.ADMIN} element={<AdminLayout />} />
        </Route>
      </>,
    ),
  );

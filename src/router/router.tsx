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

import { PlatformsPage } from 'pages/PlatformsPage/PlatformsPage';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.PLATFORMS} element={<PlatformsPage />} />
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
    </>,
  ),
);

import { HomePage, SettingsPage } from 'pages';
import { MainLayout } from 'pages/MainLayout/MainLayout';
import { RegistrationPage } from 'pages/Auth/RegistrationPage/RegistrationPage';
import { SignInPage } from 'pages/Auth/SignInPage/SignInPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ResetPasswordPage } from 'pages/Auth/ResetPasswordPage/ResetPasswordPage';
import { NewPasswordPage } from 'pages/Auth/NewPasswordPage/NewPasswordPage';
import { ProfileLayout } from 'components/ProfileLayout/ProfileLayout';

import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={ROUTE.PROFILE} element={<ProfileLayout />}>
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

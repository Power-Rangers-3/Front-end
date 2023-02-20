import { HomePage } from 'pages';
import { MainLayout } from 'pages/MainLayout/MainLayout';
import { RegistrationPage } from 'pages/Auth/RegistrationPage/RegistrationPage';
import { SignInPage } from 'pages/Auth/SignInPage/SignInPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { ResetPasswordPage } from 'pages/Auth/ResetPasswordPage.ts/ResetPasswordPage';

import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.PROFILE} />
      </Route>
      <Route path={ROUTE.SIGN_UP} element={<RegistrationPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={`${ROUTE.SIGN_IN}/:token`} element={<SignInPage />} />
    </>,
  ),
);

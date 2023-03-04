import { Navigate } from 'react-router-dom';

import { IUser } from 'store/types';

import { ROUTE } from './routes';

export function ProtectedAdminPage({
  redirectPage = ROUTE.SIGN_IN,
  user,
  children,
}: {
  redirectPage?: string;
  user?: IUser;
  children: JSX.Element;
}) {
  if (user?.isAuth && user?.role?.type === 'SuperAdmin') {
    return children;
  }

  return <Navigate to={redirectPage} replace />;
}

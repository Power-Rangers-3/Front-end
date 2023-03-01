import { Navigate } from 'react-router-dom';

import { IUserSlice } from 'store/types';

import { ROUTE } from './routes';

export function ProtectedAdminPage({
  redirectPage = ROUTE.SIGN_IN,
  user,
  children,
}: {
  redirectPage?: string;
  user?: IUserSlice;
  children: JSX.Element;
}) {
  // раскомментировать после реализации ролей
  // if (user?.isAuth && user?.roles?.includes('admin')) {
  //   return children;
  // }

  // удалить после реализации ролей
  if (true || user?.isAuth) {
    return children;
  }

  return <Navigate to={redirectPage} replace />;
}

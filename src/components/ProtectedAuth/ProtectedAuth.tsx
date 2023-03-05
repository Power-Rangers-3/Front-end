import { Navigate, Outlet } from 'react-router';

import { ROUTE } from 'router';
import { IUser } from 'store/types';

interface IProps {
  user: IUser;
}

export const ProtectedAuth = ({ user }: IProps) => {
  if (!user.isAuth) {
    return <Navigate to={ROUTE.SIGN_IN} replace />;
  }

  return <Outlet />;
};

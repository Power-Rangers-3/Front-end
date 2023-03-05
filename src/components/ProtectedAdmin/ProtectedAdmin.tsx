import { Navigate } from 'react-router-dom';

import { IUser } from 'store/types';

import { ROUTE } from 'router';

interface IProps {
  redirectPage?: string;
  user?: IUser;
  children: JSX.Element;
}

export const ProtectedAdmin = ({ redirectPage = ROUTE.SIGN_IN, user, children }: IProps) => {
  if (user?.isAuth && user?.role?.type === 'SuperAdmin') {
    return children;
  }

  return <Navigate to={redirectPage} replace />;
};

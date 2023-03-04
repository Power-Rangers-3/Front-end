import { Navigate } from "react-router";

import { getUser, useAppSelector } from "store";

import { ROUTE } from "./routes";


interface IProps {
  children?: React.ReactNode;
}

export const ProtectedRoute = ({ children }: IProps) => {
  const { isAuth } = useAppSelector(getUser);
    if (!isAuth) {
      return <Navigate to={`/${ROUTE.SIGN_IN}`} replace />;
    }
  
    return children;
  };
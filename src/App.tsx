import { RouterProvider } from 'react-router';
import { router } from 'router';
import { getUser, useAppSelector } from 'store';
import { Global } from '@emotion/react';
import { getGlobalStyles } from 'styles/globalStyles';

export const App = () => {
  const user = useAppSelector(getUser);

  return (
    <>
      <Global styles={getGlobalStyles()} />
      <RouterProvider router={router(user)} />
    </>
  );
};

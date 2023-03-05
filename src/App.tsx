import { RouterProvider } from 'react-router';
import { router } from 'router';
import { getUser, setPlatforms, signInAction, useAppDispatch, useAppSelector } from 'store';
import { Global } from '@emotion/react';
import { getGlobalStyles } from 'styles/globalStyles';
import { useEffect } from 'react';
import { platformsData } from 'mocks';

export const App = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPlatforms(platformsData));
    dispatch(signInAction());
  }, [dispatch]);

  return (
    <>
      <Global styles={getGlobalStyles()} />
      <RouterProvider router={router(user)} />
    </>
  );
};

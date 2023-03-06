import { RouterProvider } from 'react-router';
import { router } from 'router';
import { getUser, setPlatforms, signInAction, useAppDispatch, useAppSelector, setVisitedPlatforms } from 'store';
import { Global } from '@emotion/react';
import { getGlobalStyles } from 'styles/globalStyles';
import { useEffect } from 'react';
import { platformsData } from 'mocks';
import { LocalStorage } from 'shared/localStorage/localStorage';

export const App = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPlatforms(platformsData));
    dispatch(signInAction());
    const visitedHistory = localStorage.getItem(LocalStorage.VisitedHistory);
    if (visitedHistory) dispatch(setVisitedPlatforms(JSON.parse(visitedHistory)));
  }, [dispatch]);

  return (
    <>
      <Global styles={getGlobalStyles()} />
      <RouterProvider router={router(user)} />
    </>
  );
};

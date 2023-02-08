import { Outlet } from 'react-router-dom';
import { getGlobalStyles } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import { themeSelector } from 'store/selectors/themeSelector';
import { useAppSelector } from 'store';
import { Header } from 'components';

export const MainLayout = () => (
  <div>
    <Global styles={getGlobalStyles(useAppSelector(themeSelector))} />
    <Header/>
    <Outlet />
  </div>
);

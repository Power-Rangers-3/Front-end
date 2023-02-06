import { Outlet } from 'react-router-dom';
import { getGlobalStyles } from 'styles/globalStyles';
import { Global } from '@emotion/react';

export const MainLayout = () => (
  <div>
    <Global styles={getGlobalStyles()} />
    <Outlet />
  </div>
);

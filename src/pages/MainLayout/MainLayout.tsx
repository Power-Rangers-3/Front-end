import { Outlet } from 'react-router-dom';
import { getGlobalStyles } from 'styles/globalStyles';
import { Global } from '@emotion/react';

import { Header } from '../../components';

export const MainLayout = () => (
  <div>
    <Global styles={getGlobalStyles()} />
    <Header />
    <Outlet />
  </div>
);

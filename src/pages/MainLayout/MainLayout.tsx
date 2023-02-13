import { Outlet } from 'react-router-dom';
import { getGlobalStyles } from 'styles/globalStyles';
import { Global } from '@emotion/react';

import styles from './styles.module.scss';

import { Header } from '../../components';

export const MainLayout = () => (
  <div className={styles.wrapper}>
    <Global styles={getGlobalStyles()} />
    <Header />
    <Outlet />
  </div>
);

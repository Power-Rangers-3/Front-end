import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

import { Footer, Header } from '../../components';

export const MainLayout = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </main>
);

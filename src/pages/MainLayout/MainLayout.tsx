import { Outlet } from 'react-router-dom';

import { signInAction, useAppDispatch } from 'store';

import { useEffect } from 'react';

import styles from './styles.module.scss';

import { Footer, Header } from '../../components';

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(signInAction());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

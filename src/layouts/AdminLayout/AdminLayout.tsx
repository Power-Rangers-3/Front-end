import { getUser, useAppSelector } from 'store';

import { MenuNavAdmin } from 'components';

import { avatar } from 'assets';

import { Outlet } from 'react-router';

import styles from './styles.module.scss';

export const AdminLayout = () => {
  const { name } = useAppSelector(getUser);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <MenuNavAdmin />
        <header className={styles.header}>
          <p>{name || 'UserName'}</p>
          <img src={avatar} alt="avatar" />
        </header>
        <div className={styles.main}>
          Main
          <Outlet />
        </div>
      </div>
    </div>
  );
};

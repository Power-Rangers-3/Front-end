import { logoIcon, materialsIcon, myHistoryIcon, myPageIcon, ratesIcon, settingsIcon, walletIcon } from 'assets';
import { Link, Outlet } from 'react-router-dom';
import { ROUTE } from 'router';
import { getUser, useAppSelector } from 'store';

import { ProfileIcon } from './ProfileIcon/ProfileIcon';

import styles from './styles.module.scss';

export const ProfileLayout = () => {
  const { name, fullname } = useAppSelector(getUser);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <ProfileIcon name={name || 'User'} fullname={fullname || ''} />
      </div>
      <nav className={styles.nav}>
        <Link to={ROUTE.HOME}>
          <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={myPageIcon} className={styles.nav__logo} alt="Дашборд" />
          Дашборд
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={materialsIcon} className={styles.nav__logo} alt="Подобрать решение" />
          Подобрать решение
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={myHistoryIcon} className={styles.nav__logo} alt="Подобрать платформу" />
          Подобрать платформу
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={walletIcon} className={styles.nav__logo} alt="Профиль" />
          Профиль
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={ratesIcon} className={styles.nav__logo} alt="Тарифы" />
          Избранное
        </Link>
        <Link to={ROUTE.PROFILE_SETTINGS} className={styles.nav__link}>
          <img src={settingsIcon} className={styles.nav__logo} alt="Настройки" />
          Настройки
        </Link>
      </nav>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

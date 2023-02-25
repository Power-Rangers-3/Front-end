import { logoIcon, materialsIcon, myHistoryIcon, myPageIcon, ratesIcon, settingsIcon, walletIcon } from 'assets';
import { Profile } from 'components/Profile/Profile';
import { Link, Outlet } from 'react-router-dom';
import { ROUTE } from 'router';
import { getUser, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const ProfileLayout = () => {
  const { isAuth, email, name } = useAppSelector(getUser);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{isAuth && <Profile name={name || ''} email={email || ''} />}</div>
      <nav className={styles.nav}>
        <Link to={ROUTE.HOME}>
          <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={myPageIcon} className={styles.nav__logo} alt="Моя страница" />
          Моя страница
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={materialsIcon} className={styles.nav__logo} alt="Обучающие материалы" />
          Обучающие материалы
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={myHistoryIcon} className={styles.nav__logo} alt="История операций" />
          История операций
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={walletIcon} className={styles.nav__logo} alt="Кошелёк" />
          Кошелёк
        </Link>
        <Link to={ROUTE.PROFILE} className={styles.nav__link}>
          <img src={ratesIcon} className={styles.nav__logo} alt="Тарифы" />
          Тарифы
        </Link>
        <Link to={ROUTE.PROFILE_SETTINGS} className={styles.nav__link}>
          <img src={settingsIcon} className={styles.nav__logo} alt="Настройки" />
          Настройки
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

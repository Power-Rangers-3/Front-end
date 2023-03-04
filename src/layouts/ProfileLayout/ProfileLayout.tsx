import { logoIcon, materialsIcon, myHistoryIcon, myPageIcon, ratesIcon, settingsIcon, walletIcon } from 'assets';
import { Link, Outlet } from 'react-router-dom';
import { ROUTE } from 'router';
import { getUser, useAppSelector } from 'store';

import { ProfileIcon } from './ProfileIcon/ProfileIcon';

import styles from './styles.module.scss';

const routes = [
  {
    to: ROUTE.PROFILE_FAVORITE,
    img: myPageIcon,
    className: styles.link,
    text: 'Дашборд',
  },
  {
    to: ROUTE.PROFILE,
    img: materialsIcon,
    className: styles.link,
    text: 'Подобрать решение',
  },
  {
    to: ROUTE.PROFILE_PLATFORMS,
    img: myHistoryIcon,
    className: styles.link,
    text: 'Подобрать платформу',
  },
  {
    to: ROUTE.PROFILE,
    img: walletIcon,
    className: styles.link,
    text: 'Профиль',
  },
  {
    to: ROUTE.PROFILE,
    img: ratesIcon,
    className: styles.link,
    text: 'Тарифы',
  },
  {
    to: ROUTE.PROFILE_SETTINGS,
    img: settingsIcon,
    className: styles.link,
    text: 'Настройки',
  },
];

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
        {routes.map(({ to, img, className, text }) => (
          <Link to={to} className={className}>
            <img src={img} className={styles.icon} alt={text} />
            {text}
          </Link>
        ))}
      </nav>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

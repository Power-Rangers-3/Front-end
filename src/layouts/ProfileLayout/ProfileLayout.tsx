import { logoIcon, MaterialsIcon, MyHistoryIcon, MyPageIcon, RatesIcon, SettingsIcon, WalletIcon } from 'assets';
import { Link, Outlet } from 'react-router-dom';
import { ROUTE } from 'router';
import { getUser, useAppSelector } from 'store';

import { ProfileIcon } from './ProfileIcon/ProfileIcon';

import styles from './styles.module.scss';

const routes = [
  {
    to: ROUTE.PROFILE_FAVORITE,
    icon: MyPageIcon,
    text: 'Дашборд',
  },
  {
    to: ROUTE.PROFILE,
    icon: MaterialsIcon,
    text: 'Подобрать решение',
  },
  {
    to: ROUTE.PROFILE_PLATFORMS,
    icon: MyHistoryIcon,
    text: 'Подобрать платформу',
  },
  {
    to: ROUTE.PROFILE,
    icon: WalletIcon,
    text: 'Профиль',
  },
  {
    to: ROUTE.PROFILE,
    icon: RatesIcon,
    text: 'Тарифы',
  },
  {
    to: ROUTE.PROFILE_SETTINGS,
    icon: SettingsIcon,
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
        {routes.map(({ to, icon, text }) => {
          const Icon = icon;
          return (
            <Link to={to} className={styles.link} key={text}>
              <Icon width="24" height="24" />
              {text}
            </Link>
          );
        })}
      </nav>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

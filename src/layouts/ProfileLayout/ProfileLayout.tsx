import { logoIcon } from 'assets';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ROUTE } from 'router';
import { getUser, useAppSelector } from 'store';

import { routes } from './config/routes';

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
        {routes.map(({ to, icon, text }) => {
          const Icon = icon;
          return (
            <NavLink to={to} className={styles.link} key={text}>
              <Icon width="24" height="24" />
              {text}
            </NavLink>
          );
        })}
      </nav>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

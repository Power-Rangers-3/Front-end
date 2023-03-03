import { Link, NavLink, Outlet } from 'react-router-dom';

import { ROUTE } from 'router';

import styles from './styles.module.scss';

export const ProfileDashboardPage = () => (
  <div>
    <div className={styles.header}>
      <h3 className={styles.headerText}>Дашборд</h3>
      <Link to={ROUTE.PROFILE} className="button buttonBright">
        Подобрать решение
      </Link>
      <Link to={ROUTE.PROFILE} className="button">
        Подобрать платформу
      </Link>
    </div>
    <nav className={styles.nav}>
      <NavLink to={ROUTE.PROFILE_FAVORITE} className={styles.item}>
        Избранное
      </NavLink>
      <NavLink to={ROUTE.PROFILE_HISTORY} className={styles.item}>
        История поиска
      </NavLink>
    </nav>
    <Outlet />
  </div>
);

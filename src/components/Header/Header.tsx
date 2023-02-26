import { useWindowSise } from 'hooks';
import { ROUTE } from 'router';
import { logoIcon } from 'assets';

import { Link } from 'react-router-dom';

import { BurgerMenu, MenuNav, Profile } from 'components';

import { getUser, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const Header = () => {
  const { width } = useWindowSise();
  const { isAuth, email, name } = useAppSelector(getUser);

  return (
    <header className={styles.header}>
      {width && width <= 768 ? (
        <div className={styles.header__wrapper}>
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
          <BurgerMenu />
        </div>
      ) : (
        <MenuNav>{isAuth && <Profile name={name || 'User'} email={email || ''} />}</MenuNav>
      )}
    </header>
  );
};

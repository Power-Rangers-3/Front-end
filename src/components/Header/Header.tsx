import { useWindowSise } from 'hooks';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { MenuNav } from 'components/MenuNav/MenuNav';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { logoIcon } from 'assets';

import styles from './styles.module.scss';

export const Header = () => {
  const { width } = useWindowSise();
  return (
    <header className={styles.header}>
      {width && width <= 768  ? (
        <div className={styles.header__wrapper}>
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
          <BurgerMenu />
        </div>
      ) : (
        <MenuNav />
      )}
    </header>
  );
};

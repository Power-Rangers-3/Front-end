import { logoIcon, exit } from 'assets';

import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { menuList } from './menuList';

import styles from './styles.module.scss';

export const MenuNavAdmin = () => (
  <nav className={styles.nav}>
    <Link to={ROUTE.HOME}>
      <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
    </Link>
    <ul className={styles.linksWrapper}>
      {menuList.map(({ url, id, image, text }) => {
        const Image = image;
        return (
          <Link to={url} key={id} className={styles.links}>
            <Image /> {text}
          </Link>
        );
      })}
    </ul>
    <Link to={ROUTE.HOME} className={styles.exit}>
      <img src={exit} alt="Exit logo" />
      <span>Выйти</span>
    </Link>
  </nav>
);

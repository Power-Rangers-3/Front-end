import { logoIcon, exit } from 'assets';

import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { menuList } from './menuList';

import styles from './styles.module.scss';

// interface IProps {
//   // eslint-disable-next-line react/require-default-props
//   children?: ReactNode;
// }

export const MenuNavAdmin = () => (
  <nav className={styles.nav}>
    <Link to={ROUTE.HOME}>
      <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
    </Link>
    <ul className={styles.linksWrapper}>
      {menuList.map(({ url, id, img, text }) => (
        <Link to={url} key={id} className={styles.links}>
          <img src={img} alt={img} />
          {text}
        </Link>
      ))}
    </ul>
    <Link to={ROUTE.HOME}>
      <img src={exit} alt="Exit logo" />
      <span>Выйти</span>
    </Link>
  </nav>
);

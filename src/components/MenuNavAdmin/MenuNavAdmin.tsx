import { logoIcon } from 'assets';

import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import styles from './styles.module.scss';
import { MenuListType } from './menuList';

// interface IProps {
//   // eslint-disable-next-line react/require-default-props
//   children?: ReactNode;
// }

export const MenuNavAdmin = (menuList: Array<MenuListType>) => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <Link to={ROUTE.HOME}>
        <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
      </Link>
      <ul>
        {menuList.map(({ url, id, img }) => (
          <Link to={url} key={id}>
            <img src={img} alt={img} />
          </Link>
        ))}
      </ul>
    </nav>
  </div>
);

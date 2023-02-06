import { logoSrc } from 'assets';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppSelector } from 'store';
import { getUserAuth } from 'store/selectors/userSelector';

import styles from './styles.module.scss';

export const Header = () => {
  const { isAuth } = useAppSelector(getUserAuth);
  return (
    <header>
      <div className={styles.header__container}>
        <Link to={ROUTE.HOME}>
          <img src={logoSrc} className={styles.logo} alt={logoSrc} />
        </Link>
        {/* @ts-ignore */}
        <div className={styles.header__navWrapper}>
          <ul>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
              <a href="#">О сервисе</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
              <a href="#">Тарифы</a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
              <a href="#">Статьи</a>
            </li>
          </ul>
        </div>
        {isAuth ? (
          'Profile'
        ) : (
          <div className={styles.header__buttonWrapper}>
            <button type="button" className={styles.enter}>
              <Link to={ROUTE.SIGN_IN} style={{ color: 'black' }}>Вход</Link>
            </button>
            <button type="button" className={styles.registration}>
              <Link to={ROUTE.SIGN_IN} style={{ color: 'white' }}>
                Регистрация
              </Link>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

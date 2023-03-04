import { logoIcon } from 'assets';
import { useWindowSise } from 'hooks';
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, useAppSelector } from 'store';
import { ROUTE } from 'router';

import styles from './styles.module.scss';
import { routes } from './config/routes';

interface IProps {
  children?: ReactNode;
}

export const MenuNav = ({ children }: IProps) => {
  const { width } = useWindowSise();
  const { isAuth } = useAppSelector(getUser);
  const navigate = useNavigate();
  const handleEnter = () => {
    navigate(ROUTE.SIGN_IN);
  };
  const handleRegistration = () => {
    navigate(ROUTE.SIGN_UP);
  };
  return (
    <div className={styles.menu__container}>
      <nav className={styles.menu__nav}>
        {width && width > 768 && (
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
        )}
        <ul>
          {routes.map(({ to, text }) => (
            <li key={text}>
              <Link to={to} className={styles.links}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {!isAuth && (
        <div className={styles.buttonsWrapper}>
          <button type="button" className={styles.enter} onClick={handleEnter}>
            Вход
          </button>
          <button type="button" className={styles.registration} onClick={handleRegistration}>
            Регистрация
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

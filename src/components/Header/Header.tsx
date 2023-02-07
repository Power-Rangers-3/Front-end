import { logoSrc } from 'assets';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppSelector } from 'store';
import { getUserAuth } from 'store/selectors/userSelector';

import styles from './styles.module.scss';

export const Header = () => {
  const { isAuth } = useAppSelector(getUserAuth);
  const navigate = useNavigate();
  const handleEnter = () => {
    navigate(ROUTE.PROFILE);
  }
  const handleRegistration = () => {
    navigate(ROUTE.SIGN_IN)
  }

  return (
    <header>
      <div className={styles.header__container}>
        <Link to={ROUTE.HOME}>
          <img src={logoSrc} className={styles.logo} alt={logoSrc} />
        </Link>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <Link to={ROUTE.SIGN_IN} className={styles.links}>О сервисе</Link>
            </li>
            <li>
              <Link to={ROUTE.SIGN_IN} className={styles.links}>Тарифы</Link>
            </li>
            <li>
              <Link to={ROUTE.SIGN_IN} className={styles.links}>Статьи</Link>
            </li>
          </ul>
        </nav>
        {isAuth ? (
          'Profile'
        ) : (
          <div className={styles.header__buttonWrapper}>
            <button type="button" className={styles.enter} onClick={handleEnter}>
                Вход
            </button>
            <button type="button" className={styles.registration} onClick={handleRegistration}>
                Регистрация
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

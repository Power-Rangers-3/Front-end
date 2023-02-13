import { logoIcon } from 'assets';
import { Profile } from 'components';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppSelector } from 'store';
import { getUser } from 'store/selectors/userSelector';

import styles from './styles.module.scss';

export const Header = () => {
  const { isAuth } = useAppSelector(getUser);
  const navigate = useNavigate();
  const handleEnter = () => {
    navigate(ROUTE.SIGN_IN);
  };
  const handleRegistration = () => {
    navigate(ROUTE.SIGN_UP);
  };

  return (
    <header>
      <div className={styles.header__container}>
        <Link to={ROUTE.HOME}>
          <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
        </Link>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <Link to={ROUTE.SIGN_UP} className={styles.links}>
                О сервисе
              </Link>
            </li>
            <li>
              <Link to={ROUTE.SIGN_UP} className={styles.links}>
                Тарифы
              </Link>
            </li>
            <li>
              <Link to={ROUTE.SIGN_UP} className={styles.links}>
                Статьи
              </Link>
            </li>
          </ul>
        </nav>
        {isAuth ? (
          <Profile name="Pavel" email="pavel.chernenko97@gmail.com" />
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

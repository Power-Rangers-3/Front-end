import { ExitIcon } from 'assets';
import { useToogle } from 'hooks';
import { Link } from 'react-router-dom';
import { LocalStorage } from 'shared/localStorage/localStorage';
import { logout, useAppDispatch } from 'store';

import { routes } from './config/routes';

import styles from './styles.module.scss';

interface IProps {
  name: string;
  email: string;
}

export const Profile = ({ name, email }: IProps) => {
  const dispatch = useAppDispatch();
  const [dropDownIsActive, toogleDropDown] = useToogle();
  const handleName = () => toogleDropDown();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem(LocalStorage.AccessToken);
    toogleDropDown();
  };
  return (
    <div className={`${styles.profile} ${dropDownIsActive && styles.open}`}>
      {dropDownIsActive && (
        <p className={styles.email} onClick={handleName}>
          {name || email}
        </p>
      )}
      <div className={styles.icon} onClick={handleName}>
        {name[0].toUpperCase()}
      </div>
      {dropDownIsActive && (
        <div className={styles.dropdown}>
          {routes.map(({ icon, text, to }) => {
            const Icon = icon;
            return (
              <Link className={styles.link} to={to} key={text}>
                <Icon width="20" height="20" />
                {text}
              </Link>
            );
          })}
          <button className={styles.button} type="button" onClick={handleLogout}>
            <ExitIcon width="20" height="20" />
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};

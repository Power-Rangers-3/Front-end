import { useToogle } from 'hooks';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppDispatch, userActions } from 'store';

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
    dispatch(userActions.logout());
    toogleDropDown();
  };
  return (
    <div className={styles.profile}>
      <div className={styles.icon} onClick={handleName}>
        {name[0]}
      </div>
      {dropDownIsActive && (
        <p className={styles.email} onClick={handleName}>
          {' '}
          {email}
        </p>
      )}
      {dropDownIsActive && (
        <div className={styles.dropdown}>
          <Link className={styles.link} to={ROUTE.PROFILE}>
            Личный кабинет
          </Link>
          <button className={styles.button} type="button" onClick={handleLogout}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};
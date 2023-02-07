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
      <div className={styles.profile__icon} onClick={handleName}>
        {name[0]}
      </div>
      {dropDownIsActive && (
        <p className={styles.profile__email} onClick={handleName}>
          {' '}
          {email}
        </p>
      )}
      {dropDownIsActive && (
        <div className={styles.profile__dropdown}>
          <Link className={styles.profile__link} to={ROUTE.PROFILE}>
            Личный кабинет
          </Link>
          <button className={styles.profile__button} type="button" onClick={handleLogout}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};

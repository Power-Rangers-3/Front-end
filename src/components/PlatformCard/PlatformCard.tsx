import { FavoriteIcon } from 'assets';
import { getUser, useAppSelector } from 'store';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  picture: string;
  text: string;
  link: string;
  id: string;
}

export const PlatformCard = ({ title, picture, text, link, id }: IProps) => {
  const { isAuth } = useAppSelector(getUser);
  const isFavorite = false;

  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        {isAuth && (
          <button className={isFavorite ? styles.favorite : ''} type="button" id={id}>
            <FavoriteIcon />
          </button>
        )}
      </div>
      <div className={styles.image}>
        <img src={picture} alt="icon" />
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.link}>
        <a href={link}>Перейти на платформу</a>
      </div>
    </div>
  );
};

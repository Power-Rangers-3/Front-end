import { FavoriteIcon } from 'assets';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from 'router';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  picture: string;
  text: string;
  id: string;
  isAuth: boolean;
  onFavorite: (id: string) => void;
  isFavorite: boolean;
}

export const PlatformCard = ({ title, picture, text, id, isAuth, onFavorite, isFavorite }: IProps) => {
  const handleFavorite = () => onFavorite(id);
  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        {isAuth && (
          <FavoriteIcon className={isFavorite ? styles.favorite : styles.notFavorite} onClick={handleFavorite} />
        )}
      </div>
      <div className={styles.image}>
        <img src={picture} alt={`logo platform ${title}`} />
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.link}>
        <Link type="button" to={generatePath(ROUTE.PLATFORMS_DETAILS, { platformId: id })}>
          Перейти на платформу
        </Link>
      </div>
    </div>
  );
};

export const ProfilePlatformCard = ({ title, picture, text, id, isAuth, onFavorite, isFavorite }: IProps) => {
  const handleFavorite = () => onFavorite(id);
  return (
    <>
      <img src={picture} width="70" height="70" alt={`logo platform ${title}`} />
      <h4>{title}</h4>
      <p className={styles.text}>{text}</p>
      <Link className={styles.button} type="button" to={generatePath(ROUTE.PLATFORMS_DETAILS, { platformId: id })}>
        Перейти
      </Link>
      {isAuth && (
        <FavoriteIcon className={isFavorite ? styles.favorite : styles.notFavorite} onClick={handleFavorite} />
      )}
    </>
  );
};

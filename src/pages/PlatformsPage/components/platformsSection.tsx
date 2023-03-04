import { getUser, useAppSelector } from 'store';

import { dataArray } from './data/dataArray';
import styles from './styles.module.scss';

import { ReactComponent as FavoriteIcon } from './assets/favoriteIcon.svg';

import { DataPlatformsType } from './types/dataPlatformsType';

export const BotCard = ({ title, picture, text, link, id }: DataPlatformsType) => {
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

export const PlatformsSection = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <div className={styles.platformList}>
        {dataArray.map((article) => (
          <BotCard {...article} key={article.id} />
        ))}
      </div>
    </div>
  </section>
);

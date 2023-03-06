import { VerticalDotsIcon } from 'assets';
import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { getVisitedPlatforms, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const ProfileHistoryPage = () => {
  const platformsHistory = useAppSelector(getVisitedPlatforms);
  return (
    <div className={styles.wrapper}>
      <p className={styles.item}>Дата</p>
      <p className={styles.item}>Платформа</p>
      <p className={styles.item}>Описание</p>
      {platformsHistory.map(({ date, text, picture, title, id }) => (
        <>
          <p className={styles.date}>{date && new Date(date).toLocaleString()}</p>
          <img className={styles.image} src={picture} alt={`logo platform ${title}`} />
          <Link className={styles.link} to={generatePath(ROUTE.PLATFORMS_DETAILS, { platformId: id })}>
            {text}
          </Link>
          <VerticalDotsIcon />
        </>
      ))}
    </div>
  );
};

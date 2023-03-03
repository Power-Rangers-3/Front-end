import styles from './styles.module.scss';

export const ProfileFavoritePage = () => (
  <div className={styles.wrapper}>
    <p className={styles.item}>Платформа</p>
    <p className={styles.item}>Шаблон</p>
    <p className={styles.item}>Описание</p>
    {/* сюда маппить платформы */}
  </div>
);

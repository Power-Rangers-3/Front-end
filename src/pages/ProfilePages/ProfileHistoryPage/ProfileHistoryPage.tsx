import styles from './styles.module.scss';

export const ProfileHistoryPage = () => (
  <div className={styles.wrapper}>
    <p className={styles.item}>Дата</p>
    <p className={styles.item}>Платформа</p>
    <p className={styles.item}>Описание</p>
    {/* сюда маппить платформы */}
  </div>
);

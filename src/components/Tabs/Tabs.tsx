import styles from './styles.module.scss';

interface Props {
  onTabClick: (tab: string) => void;
  activeTab: string;
}

export const Tabs = ({ onTabClick, activeTab }: Props) => {
  const isTabActive = (tab: string) => (activeTab === tab ? styles.active : '');

  return (
    <div className={styles.tabs}>
      <div onClick={() => onTabClick('en')} className={`${styles.tab} ${isTabActive('en')}`}>
        A-Z
      </div>
      <div onClick={() => onTabClick('ru')} className={`${styles.tab} ${isTabActive('ru')}`}>
        А-Я
      </div>
    </div>
  );
};

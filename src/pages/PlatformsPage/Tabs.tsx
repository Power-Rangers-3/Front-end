import styles from './styles.module.scss';

interface Props {
  onTabClick: (tab: string) => void;
  activeTab: string;
  language?: 'en' | 'ru';
}

export const Tabs = ({ onTabClick, activeTab, language }: Props) => {
  const handleTabClick = (tab: string) => {
    onTabClick(tab);
  };

  const isTabActive = (tab: string) => (activeTab === tab ? styles.tabs__item_active : '');

  return (
    <div className={styles.tabs}>
      <div onClick={() => handleTabClick('a-z')} className={`${styles.tabs__item} ${isTabActive('a-z')}`}>
        {language === 'ru' ? 'А-Я' : 'A-Z'}
      </div>
      <div onClick={() => handleTabClick('а-я')} className={`${styles.tabs__item} ${isTabActive('а-я')}`}>
        {language === 'en' ? 'A-Z' : 'А-Я'}
      </div>
    </div>
  );
};

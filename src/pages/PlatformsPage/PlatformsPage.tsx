import { PlatformList, Pagination } from 'components';
import { platformsData } from 'mocks';
import { Tabs } from 'pages';
import { useState, useEffect } from 'react';

import styles from './styles.module.scss';

export const PlatformsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [platforms, setPlatforms] = useState(platformsData);
  const [activeTab, setActiveTab] = useState('a-z');
  const [russianSort, setRussianSort] = useState(false);

  useEffect(() => {
    const sortedPlatforms = platformsData.slice().sort((a, b) => {
      const locale = russianSort ? 'ru' : 'en';
      return a.title.localeCompare(b.title, locale);
    });
    setPlatforms(sortedPlatforms);
  }, [activeTab, russianSort]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const sortPlatforms = (tab: string) => {
    setActiveTab(tab);
    setRussianSort(tab === 'а-я');
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Tabs onTabClick={sortPlatforms} activeTab={activeTab} />
        <PlatformList platforms={platforms} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(platforms.length / 10)}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

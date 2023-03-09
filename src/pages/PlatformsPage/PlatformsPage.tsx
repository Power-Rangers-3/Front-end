import { getUser, useAppSelector, useAppDispatch, addFavoritePlatform, getPlatforms } from 'store';
import { PlatformList, Pagination, Tabs } from 'components';
import { useState, useEffect } from 'react';

import { IPlatform } from 'mocks';

import styles from './styles.module.scss';

export const PlatformsPage = () => {
  const { isAuth } = useAppSelector(getUser);
  const platforms = useAppSelector(getPlatforms);
  const [sortedPlatforms, setSortedPlatforms] = useState<IPlatform[]>([]);
  const dispatch = useAppDispatch();
  const addToFavorite = (id: string) => {
    dispatch(addFavoritePlatform(id));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('en');

  useEffect(() => {
    setSortedPlatforms(platforms.slice().sort((a, b) => a.title.localeCompare(b.title, activeTab)));
  }, [activeTab, platforms]);

  const ELEMENT_FOR_PAGE = 10;
  const lastIndexElement = currentPage * ELEMENT_FOR_PAGE;
  const firstIndexElement = lastIndexElement - ELEMENT_FOR_PAGE;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const onTabClick = (tab: string) => setActiveTab(tab);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {isAuth && <Tabs onTabClick={onTabClick} activeTab={activeTab} />}
        <PlatformList
          platforms={sortedPlatforms.slice(firstIndexElement, lastIndexElement)}
          isAuth={isAuth}
          onFavorite={addToFavorite}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(platforms.length / 10)}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

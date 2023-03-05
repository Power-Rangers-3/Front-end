import { getUser, useAppSelector, useAppDispatch, addFavoritePlatform, getPlatforms } from 'store';
import { PlatformList, Pagination } from 'components';
import { useState } from 'react';

import styles from './styles.module.scss';

export const PlatformsPage = () => {
  const { isAuth } = useAppSelector(getUser);
  const platforms = useAppSelector(getPlatforms);
  const dispatch = useAppDispatch();
  const addToFavorite = (id: string) => {
    dispatch(addFavoritePlatform(id));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <PlatformList platforms={platforms} isAuth={isAuth} onFavorite={addToFavorite} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(platforms.length / 10)}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

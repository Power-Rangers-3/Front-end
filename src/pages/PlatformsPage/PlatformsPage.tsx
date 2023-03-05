import { PlatformList, Pagination } from 'components';
import { platformsData } from 'mocks';
import { useState } from 'react';

import styles from './styles.module.scss';

export const PlatformsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <PlatformList platforms={platformsData} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(platformsData.length / 10)}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

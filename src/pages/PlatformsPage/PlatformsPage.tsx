import { PlatformList } from 'components';
import { platformsData } from 'mocks';
import { useState } from 'react';
import { Pagination } from 'components';

import styles from './styles.module.scss';

export const PlatformsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <PlatformList platforms={platformsData} />
      <Pagination
        currentPage={currentPage}
        totalPages={9}
        onPageChange={handlePageChange}
      />
    </div>
  </section>
};

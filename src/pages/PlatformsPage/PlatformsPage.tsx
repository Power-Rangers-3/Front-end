
import { useState } from 'react';
import { Pagination } from 'components';

import { PlatformsSection } from './components/platformsSection';

import styles from './styles.module.scss';

export const PlatformsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return (
    <main className={styles.main}>
      <PlatformsSection />
      <Pagination
        currentPage={currentPage}
        totalPages={9}
        onPageChange={handlePageChange}
      />
    </main>
  );
}

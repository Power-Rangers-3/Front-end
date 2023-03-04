import { PlatformList } from 'components';
import { platformsData } from 'mocks';

import styles from './styles.module.scss';

export const PlatformsPage = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <PlatformList platforms={platformsData} />
    </div>
  </section>
);

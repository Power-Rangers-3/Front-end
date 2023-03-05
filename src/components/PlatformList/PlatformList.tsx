import { PlatformCard } from 'components';
import { IPlatform } from 'mocks';

import styles from './styles.module.scss';

interface IProps {
  platforms: IPlatform[];
}

export const PlatformList = ({ platforms }: IProps) => (
  <div className={styles.platformList}>
    {platforms.map((platform) => (
      <PlatformCard {...platform} key={platform.id} />
    ))}
  </div>
);

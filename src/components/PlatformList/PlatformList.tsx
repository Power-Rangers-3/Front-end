import { PlatformCard } from 'components';
import { IPlatform } from 'mocks';

import styles from './styles.module.scss';

interface IProps {
  platforms: IPlatform[];
  onFavorite: (id: string) => void;
  isAuth: boolean;
}

export const PlatformList = ({ platforms, onFavorite, isAuth }: IProps) => (
  <div className={styles.platformList}>
    {platforms.map((platform) => (
      <PlatformCard isAuth={isAuth} {...platform} key={platform.id} onFavorite={onFavorite} />
    ))}
  </div>
);

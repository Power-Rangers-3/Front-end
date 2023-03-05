import { PlatformList } from 'components';
import { getUser, useAppSelector, useAppDispatch, addFavoritePlatform, getPlatforms } from 'store';

import styles from './styles.module.scss';

export const PlatformsPage = () => {
  const { isAuth } = useAppSelector(getUser);
  const platforms = useAppSelector(getPlatforms);
  const dispatch = useAppDispatch();
  const addToFavorite = (id: string) => {
    dispatch(addFavoritePlatform(id));
  };
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <PlatformList platforms={platforms} isAuth={isAuth} onFavorite={addToFavorite} />
      </div>
    </section>
  );
};

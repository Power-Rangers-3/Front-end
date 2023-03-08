import { ProfilePlatformCard } from 'components';
import { getFavoritePlatforms, getUser, useAppSelector, useAppDispatch, deleteFavoritePlatform } from 'store';

import styles from './styles.module.scss';

export const ProfileFavoritePage = () => {
  const favoritePlatforms = useAppSelector(getFavoritePlatforms);
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getUser);
  const deleteFavorite = (id: string) => dispatch(deleteFavoritePlatform(id));
  return (
    <div className={styles.wrapper}>
      <p className={styles.item}>Платформа</p>
      <p className={styles.item}>Шаблон</p>
      <p className={styles.item}>Описание</p>
      {favoritePlatforms.map((platform) => (
        <ProfilePlatformCard {...platform} isAuth={isAuth} onFavorite={deleteFavorite} key={platform.id} />
      ))}
    </div>
  );
};

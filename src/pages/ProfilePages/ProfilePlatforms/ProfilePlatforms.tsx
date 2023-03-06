import { PlatformList } from 'components';
import { addFavoritePlatform, getPlatforms, getUser, useAppDispatch, useAppSelector } from 'store';

export const ProfilePlatforms = () => {
  const platforms = useAppSelector(getPlatforms);
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const addToFavorite = (id: string) => {
    dispatch(addFavoritePlatform(id));
  };
  return <PlatformList platforms={platforms} onFavorite={addToFavorite} isAuth={isAuth} />;
};

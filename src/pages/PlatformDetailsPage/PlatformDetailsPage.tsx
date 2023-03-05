import { PlatformCard } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  addFavoritePlatform,
  getPlatform,
  getPlatforms,
  getUser,
  setPlatform,
  useAppDispatch,
  useAppSelector,
} from 'store';

export const PlatformDetailsPage = () => {
  const { platformId } = useParams();
  const { isAuth } = useAppSelector(getUser);
  const platforms = useAppSelector(getPlatforms);
  const platform = useAppSelector(getPlatform);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPlatform(platforms.find((item) => item.id === platformId)));
  }, [dispatch, platformId, platforms]);
  const addToFavorite = (id: string) => {
    dispatch(addFavoritePlatform(id));
  };
  if (platform) {
    return (
      <PlatformCard
        {...platform}
        text={platform.text || ''}
        isFavorite={false}
        isAuth={isAuth}
        onFavorite={addToFavorite}
      />
    );
  }
  return <div>{platformId}</div>;
};

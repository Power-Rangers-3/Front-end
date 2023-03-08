import { PlatformCard } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  addFavoritePlatform,
  addVisitedPlatform,
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
    if (platformId) {
      dispatch(setPlatform(platforms.find((item) => item.id === platformId)));
      dispatch(addVisitedPlatform(platformId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, platformId]);
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

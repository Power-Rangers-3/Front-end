import { RootState } from 'store/types/types';

export const getPlatforms = (state: RootState) => state.platforms.platforms;

export const getFavoritePlatforms = (state: RootState) => state.platforms.favoritePlatforms;

export const getVisitedPlatforms = (state: RootState) => state.platforms.visitedPlatforms;

export const getPlatform = (state: RootState) => state.platform;

export const getSortPlatforms = (state: RootState) => state.sortPlatforms;

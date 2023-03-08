import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlatform } from 'mocks';
import { IPlatformsState } from 'store/types';

const initialState: IPlatformsState = {
  platforms: [],
  favoritePlatforms: [],
  visitedPlatforms: [],
  sortPlatforms: [],
};

const platformsSlice = createSlice({
  name: 'platforms',
  initialState,
  reducers: {
    setPlatforms: (state, { payload }: PayloadAction<IPlatform[]>) => {
      state.platforms = payload;
    },
    addFavoritePlatforms: (state, { payload }: PayloadAction<IPlatform>) => {
      state.favoritePlatforms.push(payload);
    },
    addVisitedPlatforms: (state, { payload }: PayloadAction<IPlatform>) => {
      state.visitedPlatforms.push(payload);
    },
    sortPlatforms: (state) => {
      state.platforms.sort((a, b) => a.title.localeCompare(b.title));
    },
  },
});

export const {
  reducer: platformsReducer,
  reducer: sortPlatformsReducer,
  actions: { setPlatforms, addFavoritePlatforms, addVisitedPlatforms, sortPlatforms },
} = platformsSlice;

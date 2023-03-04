import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlatform } from 'mocks';
import { IPlatformsState } from 'store/types';

const initialState: IPlatformsState = {
  platforms: [],
  favoritePlatforms: [],
  visitedPlatforms: [],
};

const platformSlice = createSlice({
  name: 'platform',
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
  },
});

export const {
  reducer: platformReducer,
  actions: { setPlatforms, addFavoritePlatforms, addVisitedPlatforms },
} = platformSlice;

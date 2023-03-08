import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlatform } from 'mocks';
import { LocalStorage } from 'shared/localStorage/localStorage';
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
    setVisitedPlatforms: (state, { payload }: PayloadAction<IPlatform[]>) => {
      state.visitedPlatforms = payload;
    },
    addFavoritePlatform: (state, { payload }: PayloadAction<string>) => {
      const favoritePlatform = state.platforms.find((platform) => platform.id === payload);
      if (favoritePlatform) {
        favoritePlatform.isFavorite = true;
        state.favoritePlatforms.push(favoritePlatform);
        state.platforms = state.platforms.map((item) => {
          if (item.id === favoritePlatform.id) item.isFavorite = true;
          return item;
        });
      }
    },
    deleteFavoritePlatform: (state, { payload }: PayloadAction<string>) => {
      state.favoritePlatforms = state.favoritePlatforms.filter((platform) => platform.id !== payload);
      state.platforms = state.platforms.map((platform) => {
        if (platform.id === payload) platform.isFavorite = false;
        return platform;
      });
    },
    addVisitedPlatform: (state, { payload }: PayloadAction<string>) => {
      const currentDate = new Date();
      const visitedPlatform = state.platforms.find((platform) => platform.id === payload);
      if (visitedPlatform) {
        visitedPlatform.date = currentDate;
        state.visitedPlatforms.push(visitedPlatform);
        localStorage.setItem(LocalStorage.VisitedHistory, JSON.stringify(state.visitedPlatforms));
      }
    },
    sortPlatforms: (state) => {
      state.platforms.sort((a, b) => a.title.localeCompare(b.title));
    },
  },
});

export const {
  reducer: platformsReducer,
  actions: { setPlatforms, addFavoritePlatform, addVisitedPlatform, deleteFavoritePlatform, setVisitedPlatforms },
} = platformsSlice;

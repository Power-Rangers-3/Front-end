import { createSlice } from '@reduxjs/toolkit';

export type ThemeVariant = 'Dark' | 'Light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeVariant: 'Light' as ThemeVariant,
  },
  reducers: {
    toggleTheme: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.themeVariant = state.themeVariant === 'Dark' ? 'Light' : 'Dark';
    },
  },
});

export const { reducer: themeReducer, actions: themeActions } = themeSlice;

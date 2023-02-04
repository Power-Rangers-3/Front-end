import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './features/theme/theme.slice';

import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';

import { platformReducer, platformsReducer, userReducer } from './features';

export const store = configureStore({
  reducer: {
    user: userReducer,
    platforms: platformsReducer,
    platform: platformReducer,
    sortPlatforms: platformsReducer,
  },
});

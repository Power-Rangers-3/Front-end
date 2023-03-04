import { createSlice } from '@reduxjs/toolkit';
import { IPlatformState } from 'store/types';

const initialState: IPlatformState = {
  title: null,
  id: null,
  picture: null,
  link: null,
  description: null,
};

const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setPlatform: (state, { payload }) => {},
  },
});

export const {
  reducer: platformReducer,
  actions: { setPlatform },
} = platformSlice;

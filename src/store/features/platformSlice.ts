import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlatform } from 'mocks';
import { IPlatformState } from 'store/types';

const initialState: IPlatformState = {
  title: '',
  id: '',
  picture: '',
  link: '',
  text: '',
};

const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setPlatform: (state, { payload }: PayloadAction<IPlatform | undefined>) => {
      if (payload) {
        state.text = payload.text;
        state.id = payload.id;
        state.link = payload.link;
        state.picture = payload.picture;
        state.title = payload.title;
      }
    },
  },
});

export const {
  reducer: platformReducer,
  actions: { setPlatform },
} = platformSlice;

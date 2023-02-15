/* eslint-disable no-param-reassign */
import { createSlice, SerializedError } from '@reduxjs/toolkit';

import { signInAction } from '../actions/signInAction';

interface IUserSlice {
  email: string | null;
  name: string | null;
  isAuth: boolean;
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: SerializedError | null;
}

const initialState: IUserSlice = {
  email: null,
  name: null,
  isAuth: true,
  loadingState: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload: { email, username } }) => {
      state.email = email;
      state.name = username;
      state.isAuth = true;
    },
    logout: (state) => {
      state.email = null;
      state.name = null;
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.email = null;
        state.name = null;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.loadingState = action.meta.requestStatus;

        if (action.payload) {
          state.email = 'email'; // заменить после реализации бэка
          state.name = 'name'; // заменить после реализации бэка
          state.isAuth = true;
          state.error = null;
        }
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
  },
});

export const {
  reducer: userReducer,
  actions: { setUser, logout },
} = userSlice;

/* eslint-disable no-param-reassign */
import { createSlice, SerializedError } from '@reduxjs/toolkit';

import { signInAction } from '../actions/signInAction';

interface IUserSlice {
  email: string | null;
  id: number | null;
  roles: [] | null;
  name: string | null;
  isAuth: boolean;
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: SerializedError | null;
}

const initialState: IUserSlice = {
  email: null,
  id: null,
  roles: null,
  name: null,
  isAuth: false,
  loadingState: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
        state.id = null;
        state.roles = null;
        state.name = null;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(signInAction.fulfilled, (state, { meta, payload: { email, id, roles } }) => {
        state.loadingState = meta.requestStatus;

        if (email) {
          state.email = email;
          state.id = id;
          state.roles = roles;
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
  actions: { logout },
} = userSlice;

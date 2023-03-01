/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { renameAction, signInAction } from 'store/actions';

import { IUserSlice } from 'store/types';

const initialState: IUserSlice = {
  email: null,
  name: null,
  fullname: null,
  id: null,
  roles: null,
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
      state.fullname = null;
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.email = null;
        state.name = null;
        state.fullname = null;
        state.id = null;
        state.roles = null;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        if (action?.payload?.email) {
          const { email, name, fullname, id, roles } = action.payload;
          state.email = email;
          state.name = name;
          state.fullname = fullname;
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
    builder
      .addCase(renameAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(renameAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.fullname = payload.fullname;
        state.name = payload.name;
      })
      .addCase(renameAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.error = error;
      });
  },
});

export const {
  reducer: userReducer,
  actions: { logout },
} = userSlice;

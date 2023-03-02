/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { renameAction, signInAction } from 'store/actions';

import { IUser } from 'store/types';

const initialState: IUser = {
  id: null,
  email: null,
  password: null,
  name: null,
  fullname: null,
  telegram: null,
  phone: null,
  idRole: null,
  createAt: null,
  updateAt: null,
  role: {
    id: null,
    role: null,
    description: null,
    createAt: null,
    updateAt: null,
  },
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
      state.role.id = null;
      state.role.role = null;
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
        state.role.id = null;
        state.role.role = null;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        if (action?.payload?.email) {
          const { email, name, fullname, id, role } = action.payload;
          state.email = email;
          state.name = name;
          state.fullname = fullname;
          state.id = id;
          state.role.role = role.role;
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

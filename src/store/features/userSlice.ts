/* eslint-disable no-param-reassign */
import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { renameAction } from 'store/actions/renameAction';

import { signInAction } from '../actions/signInAction';

interface IUserSlice {
  email: string | null;
  name: string | null;
  fullname: string | null;
  id: number | null | string;
  roles: [] | null;
  isAuth: boolean;
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: SerializedError | null;
}

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
      })
      .addCase(renameAction.fulfilled, (state, action) => {
        if (action?.payload?.name && action?.payload?.fullname) {
          const { name, fullname } = action.payload;
          state.name = name;
          state.fullname = fullname;
        }
      })
      .addCase(renameAction.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const {
  reducer: userReducer,
  actions: { logout },
} = userSlice;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IUserSlice {
  email: string | null;
  name: string | null;
  isAuth: boolean;
}

const initialState: IUserSlice = {
  email: null,
  name: null,
  isAuth: false,
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
});

export const {
  reducer: userReducer,
  actions: { setUser, logout },
} = userSlice;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IUserSlice {
  email: string | null;
  name: string | null;
}

const initialState: IUserSlice = {
  email: null,
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload: { email, username } }) => {
      state.email = email;
      state.name = username;
    },
    exitFromAccount: (state) => {
      state.email = null;
      state.name = null;
    },
  },
});

export const {
  reducer: userReducer,
  actions: { setUser, exitFromAccount },
} = userSlice;

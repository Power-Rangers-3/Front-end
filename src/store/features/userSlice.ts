/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface IUserSlice {
  email: string | null;
  id: string | null;
}

const initialState: IUserSlice = {
  email: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    exitFromAccount: (state) => {
      state.email = null;
      state.id = null;
    },
  },
});

export const {
  reducer: userReducer,
  actions: { setUser, exitFromAccount },
} = userSlice;

import { createSlice } from '@reduxjs/toolkit';

interface IUserSlice {
  name: string | null;
  surname: string | null;
  id: string | null;
  isAuth: boolean;
}

const initialState: IUserSlice = {
  name: null,
  surname: null,
  id: null,
  isAuth: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.name = null;
      state.surname = null;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;

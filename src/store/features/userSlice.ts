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
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;

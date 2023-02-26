import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSignIn } from 'modules/Auth';

interface UserInfo {
  email: string;
  name: string;
  fullname: string;
  id: number;
  roles: [] | null;
}

export const signInAction = createAsyncThunk<Awaited<ReturnType<typeof userSignIn>>>(
  'user/signInAction',
  (): Promise<UserInfo> => userSignIn(),
);

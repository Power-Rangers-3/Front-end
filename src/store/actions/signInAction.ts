import { createAsyncThunk } from '@reduxjs/toolkit';

import { userSignIn } from '../../modules';

interface UserInfo {
  email: string;
  username: string;
}

export const signInAction = createAsyncThunk<Awaited<ReturnType<typeof userSignIn>>>(
  'user/signInAction',
  (): Promise<UserInfo> => userSignIn(),
);

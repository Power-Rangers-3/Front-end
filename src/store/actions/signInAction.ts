import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSignIn } from 'modules/Auth';
import { IUser } from 'store/types';

export const signInAction = createAsyncThunk<Awaited<ReturnType<typeof userSignIn>>>(
  'user/signInAction',
  (): Promise<IUser> => userSignIn(),
);

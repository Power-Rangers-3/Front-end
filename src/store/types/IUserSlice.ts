import { SerializedError } from '@reduxjs/toolkit';

export interface IUserSlice {
  email: string | null;
  name: string | null;
  fullname: string | null;
  id: number | null | string;
  roles: [string] | null;
  isAuth: boolean;
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: SerializedError | null;
}

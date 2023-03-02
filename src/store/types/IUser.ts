import { SerializedError } from '@reduxjs/toolkit';

export interface IUser {
  id: string | null;
  email: string | null;
  password: string | null;
  name: string | null;
  fullname: string | null;
  telegram: string | null;
  phone: string | null;
  idRole: string | null;
  createAt: string | null;
  updateAt: string | null;
  role: {
    id: string | null;
    role: 'User' | 'SuperAdmin' | null;
    description: string | null;
    createAt: string | null;
    updateAt: string | null;
  };
  isAuth: boolean;
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: SerializedError | null;
}

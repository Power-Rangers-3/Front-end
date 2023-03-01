import { LocalStorage } from 'shared/localStorage/localStorage';
import { IUserSlice } from 'store/types';

import { authAxiosInstance } from './authAxiosInstance';

const apiPath = `${process.env.REACT_APP_API_AUTH}/users/info/`;

export const userSignIn = async (): Promise<IUserSlice> => {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.get(apiPath).then(({ data }) => data);
};

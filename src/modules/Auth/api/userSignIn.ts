import { LocalStorage } from 'shared/localStorage/localStorage';
import { IUser } from 'store/types';

import { authAxiosInstance } from './authAxiosInstance';

const apiPath = `${process.env.REACT_APP_API_AUTH}/users/info/`;

export const userSignIn = async (): Promise<IUser> => {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.get(apiPath).then(({ data }) => data);
};

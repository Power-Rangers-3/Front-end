import { LocalStorage } from 'shared/localStorage/localStorage';
import { baseUrl } from 'config';

import { authAxiosInstance } from './authAxiosInstance';

import { IUserResponse } from '../types';

const apiPath = `${baseUrl}/users/info/`;

export const userSignIn = async (): Promise<IUserResponse> => {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.get(apiPath).then(({ data }) => data);
};

import { LocalStorage } from 'shared/localStorage/localStorage';

import { authAxiosInstance } from './authAxiosInstance';

import { IUserResponse } from '../types';

const apiPath = `${process.env.REACT_APP_API_AUTH}/users/info/`;

export const userSignIn = async (): Promise<IUserResponse> => {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.get(apiPath).then(({ data }) => data);
};

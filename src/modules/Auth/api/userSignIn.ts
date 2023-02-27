import { LocalStorage } from 'shared/localStorage/localStorage';

import { authAxiosInstance } from './authAxiosInstance';

const apiPath = `${process.env.REACT_APP_API_AUTH}/users/info/`;

interface UserInfo {
  email: string;
  name: string;
  fullname: string;
  id: number;
  roles: [] | null;
}

export const userSignIn = async (): Promise<UserInfo> => {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.get(apiPath).then(({ data }) => data);
};

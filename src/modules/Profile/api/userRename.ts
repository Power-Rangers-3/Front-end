import { LocalStorage } from 'shared/localStorage/localStorage';
import { baseUrl } from 'config';

import { authAxiosInstance } from './authAxiosInstance';

interface UserData {
  name: string;
  fullname: string;
}

export const userRename = async (user: UserData, id: number | string | null) => {
  const apiPath = `${baseUrl}/users/${id}/update/`;
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken && authAxiosInstance.patch(apiPath, user).then(({ data }) => data);
};

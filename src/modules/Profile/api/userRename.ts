import { LocalStorage } from 'shared/localStorage/loalStorage';

import { authAxiosInstance } from './authAxiosInstance';

const apiPath = `${process.env.REACT_APP_API_AUTH}/users/1/update/`;

interface UserRenameType {
  email?: string;
  password?: string;
  name?: string;
  fullname?: string;
  phone?: string;
  telegram?: string;
}

export async function userRename(user: any): Promise<UserRenameType> {
  const params = {
    name: user.name,
    fullname: user.fullname,
  };
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken ? authAxiosInstance.patch(apiPath, params).then(({ data }) => data) : null;
}

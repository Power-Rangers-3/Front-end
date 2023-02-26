import { LocalStorage } from 'shared/localStorage/loalStorage';

import { authAxiosInstance } from './authAxiosInstance';

import { ChangeNameType } from '../types';
import { UserRenameResponseType } from '../types/userRename';

export async function userRename({ name, fullname, id }: ChangeNameType): Promise<UserRenameResponseType> {
  const apiPath = `${process.env.REACT_APP_API_AUTH}/users/${id}/update/`;

  const params = {
    name,
    fullname,
  };
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken ? authAxiosInstance.patch(apiPath, params).then(({ data }) => data) : null;
}

import axios from 'axios';
import { LocalStorage } from 'shared/localStorage/localStorage';

import { endpoints } from './endpoints';

interface QuerryParamsType {
  email: string;
  password: string;
}

export const getToken = async (querryParams: QuerryParamsType): Promise<string> => {
  const params = {
    email: querryParams.email.trim(),
    password: querryParams.password.trim(),
  };

  const token: string = await axios.post(endpoints.signIn, params).then((response) => response.data.value);
  localStorage.setItem(LocalStorage.AccessToken, token);

  return token;
};

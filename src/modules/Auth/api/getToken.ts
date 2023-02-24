import axios from 'axios';
import { LocalStorage } from 'shared/localStorage/loalStorage';

const apiToken = `${process.env.REACT_APP_API_AUTH}/auth/login`;

interface QuerryParamsType {
  email: string;
  password: string;
}

export async function getToken(querryParams: QuerryParamsType): Promise<string> {
  const params = {
    email: querryParams.email.trim(),
    password: querryParams.password.trim(),
  };

  const token: string = await axios.post(apiToken, params).then((response) => response.data.value);
  localStorage.setItem(LocalStorage.AccessToken, token);

  return token;
}

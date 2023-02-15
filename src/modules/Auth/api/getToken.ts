import axios from 'axios';
import { LocalStorage } from 'shared/localStorage/loalStorage';

const apiToken = `${process.env.REACT_APP_API_AUTH}/auth/login`;

interface QuerryParamsType {
  email: string;
  password: string;
}

interface TokensType {
  token: string;
}

export async function getTokens(querryParams: QuerryParamsType): Promise<TokensType> {
  return axios.post(apiToken, querryParams).then((response) => {
    const { token } = response.data;
    localStorage.setItem(LocalStorage.AccessToken, token);
    return token;
  });
}

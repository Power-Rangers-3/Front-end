import { LocalStorage } from 'shared/localStorage/loalStorage';
import axios from 'axios';

const apiPath = `${process.env.REACT_APP_API_AUTH}/user/info/`;

export const authAxiosInstance = axios.create();

authAxiosInstance.interceptors.request.use((requestConfigArgs) => {
  const requestConfig = requestConfigArgs;
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  requestConfig.headers = requestConfig.headers || {};

  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return requestConfig;
});

interface UserInfo {
  email: string;
  username: string;
}

export async function userSignIn(): Promise<UserInfo> {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken ? authAxiosInstance.get(apiPath).then(({ data }) => data) : null;
}

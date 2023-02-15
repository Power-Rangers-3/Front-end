import axios, { AxiosResponse } from 'axios';
import { LocalStorage } from 'shared/localStorage/loalStorage';

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/sign/`;

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

export async function userSignIn(): Promise<AxiosResponse> {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken ? authAxiosInstance.get(apiPath).then(({ data }) => data) : null;
}

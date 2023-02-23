import axios from 'axios';
import { LocalStorage } from 'shared/localStorage/loalStorage';

const apiToken = `${process.env.REACT_APP_API_AUTH}/auth/refresh/`;

export async function refreshToken(): Promise<void> {
  await axios.get(apiToken).then(({ data }) => {
    localStorage.setItem(LocalStorage.AccessToken, data);
  });
}

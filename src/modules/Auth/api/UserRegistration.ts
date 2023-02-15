import axios, { AxiosResponse } from 'axios';

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/registration/`;

export interface UserRegistrationType {
  email: string;
  password: string;
}

export async function userRegistration(querryParams: UserRegistrationType): Promise<AxiosResponse> {
  return axios.post(apiPath, querryParams);
}

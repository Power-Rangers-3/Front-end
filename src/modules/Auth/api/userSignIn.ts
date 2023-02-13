import axios, { AxiosResponse } from 'axios';

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/sign/`;

interface UserSignInType {
  email: string;
  password: string;
}

export async function userSignIn(querryParams: UserSignInType): Promise<AxiosResponse> {
  return axios.post(apiPath, querryParams);
}

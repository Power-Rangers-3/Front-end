import axios, { AxiosResponse } from 'axios';

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/registration`;

export interface UserRegistrationType {
  email: string;
  name: string;
  fullname: string;
  password: string;
}

export async function userRegistration(querryParams: UserRegistrationType): Promise<AxiosResponse> {
  const params = {
    email: querryParams.email.trim(),
    name: querryParams.name.trim(),
    fullname: querryParams.fullname.trim(),
    password: querryParams.password.trim(),
  };

  return axios.post(apiPath, params);
}

enum ENDPOINT {
  SIGN_IN = 'login',
  SIGN_UP = 'registration',
  REFRESH_TOKEN = 'refresh',
}

const api = `${process.env.REACT_APP_API_AUTH}/auth/`;

export const endpoints = {
  signIn: api + ENDPOINT.SIGN_IN,
  signUp: api + ENDPOINT.SIGN_UP,
  refreshToken: api + ENDPOINT.REFRESH_TOKEN,
};

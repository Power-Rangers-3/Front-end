enum ENDPOINT {
  SIGN_IN = 'auth/login',
  SIGN_UP = 'auth/registration',
  REFRESH_TOKEN = 'auth/refresh',
  SEND_EMAIL = 'users/refresh-password-request',
  RESET_PASSWORD = 'users/refresh-password-answer-code',
}

const api = `${process.env.REACT_APP_API_AUTH}/`;

export const endpoints = {
  signIn: api + ENDPOINT.SIGN_IN,
  signUp: api + ENDPOINT.SIGN_UP,
  refreshToken: api + ENDPOINT.REFRESH_TOKEN,
  sendEmail: api + ENDPOINT.SEND_EMAIL,
  resetPassword: api + ENDPOINT.RESET_PASSWORD,
};

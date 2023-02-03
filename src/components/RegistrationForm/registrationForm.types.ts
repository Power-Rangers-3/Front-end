export interface RegisterUserType {
  username: string;
  email: string;
  password: string;
}

export interface FormDataType extends RegisterUserType {
  confirmPassword: string;
}

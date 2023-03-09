import * as Yup from 'yup';

import { EMAIL_PATTERN, USERNAME_PATTERN } from './regularExpressions';

export const passwordValidation = Yup.string()
  .min(8, 'Число символов должно быть не менее 8')
  .matches(/[A-Z]/, 'Пароль должен содержать заглавную букву')
  .matches(/\d/, 'Пароль должен содержать цифру')
  .matches(/[^a-zA-Z\d]/, 'Пароль должен содержать специальный символ')
  .required('Обязательное для заполнения поле');

export const emailValidation = Yup.string()
  .min(4, 'Число символов должно быть не менее 4')
  .matches(EMAIL_PATTERN, 'Некорректный email')
  .required('Обязательное для заполнения поле');

export const nameValidation = Yup.string()
  .matches(USERNAME_PATTERN, 'Допускаются только буквы кириллицы или латиницы')
  .min(2, 'Число символов должно быть не менее 2')
  .required('Обязательное для заполнения поле');

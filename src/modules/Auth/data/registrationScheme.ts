import * as Yup from 'yup';

import { EMAIL_PATTERN, USERNAME_PATTERN } from './regularExpressions';

export const schema = Yup.object().shape({
  name: Yup.string()
    .matches(USERNAME_PATTERN, 'Введите корректное имя')
    .min(2, 'Число символов должно быть не менее 2')
    .max(16, 'Число символов должно быть не более 16')
    .required('Обязательное для заполнения поле'),
  fullname: Yup.string()
    .matches(USERNAME_PATTERN, 'Введите корректное имя')
    .min(2, 'Число символов должно быть не менее 2')
    .max(16, 'Число символов должно быть не более 16')
    .required('Обязательное для заполнения поле'),
  email: Yup.string()
    .min(4, 'Число символов должно быть не менее 4')
    .max(25, 'Число символов должно быть не более 25')
    .matches(EMAIL_PATTERN, 'Некорректный email')
    .required('Обязательное для заполнения поле'),
  password: Yup.string().min(4, 'Число символов должно быть не менее 4').required('Обязательное для заполнения поле'),
});

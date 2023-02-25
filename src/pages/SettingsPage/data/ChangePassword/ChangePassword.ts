import * as Yup from 'yup';

export const schema = Yup.object().shape({
    username: Yup.string().required('Введите имя пользователя'),
    email: Yup.string().email('Введите корректный email').required('Введите email адрес'),
    currentPassword: Yup.string().required('Введите старый пароль'),
    password: Yup.string()
      .required('Введите новый пароль')
      .min(8, 'Пароль должен содержать не менее 8 символов')
      .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
      .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
      .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру')
      .matches(/[^a-zA-Z\d]/, 'Пароль должен содержать хотя бы один специальный символ'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
      .required('Подтвердите новый пароль'),
  });
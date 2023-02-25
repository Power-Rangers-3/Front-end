import * as Yup from 'yup';

export const schema = Yup.object().shape({
  currentPassword: Yup.string().min(4, 'Число символов должно быть не менее 4').required('Введите старый пароль'),
  password: Yup.string()
    .required('Введите новый пароль')
    .min(4, 'Пароль должен содержать не менее 4 символов')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру')
    .matches(/[^a-zA-Z\d]/, 'Пароль должен содержать хотя бы один специальный символ'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Подтвердите новый пароль'),
});

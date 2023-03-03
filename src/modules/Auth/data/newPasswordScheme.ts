import * as Yup from 'yup';

export const schema = Yup.object().shape({
  password: Yup.string().min(4, 'Число символов должно быть не менее 4').required('Обязательное для заполнения поле'),
  confirmPassword: Yup.string()
    .min(4, 'Число символов должно быть не менее 4')
    .required('Обязательное для заполнения поле')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
});

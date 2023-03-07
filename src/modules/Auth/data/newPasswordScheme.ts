import { passwordValidation } from 'shared/validationRules/validationRules';
import * as Yup from 'yup';

export const schema = Yup.object().shape({
  password: passwordValidation,
  confirmPassword: Yup.string()
    .required('Обязательное для заполнения поле')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
});

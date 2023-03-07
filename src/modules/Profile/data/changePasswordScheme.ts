import { passwordValidation } from 'shared/validationRules/validationRules';
import * as Yup from 'yup';

export const changePasswordScheme = Yup.object().shape({
  currentPassword: passwordValidation,
  password: passwordValidation,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Подтвердите новый пароль'),
});

import * as Yup from 'yup';

import { EMAIL_PATTERN } from './regularExpressions';

export const schema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Число символов должно быть не менее 4')
    .max(25, 'Число символов должно быть не более 25')
    .matches(EMAIL_PATTERN, 'Некорректный email')
    .required('Обязательное для заполнения поле'),
  password: Yup.string().min(4, 'Число символов должно быть не менее 4').required('Обязательное для заполнения поле'),
});

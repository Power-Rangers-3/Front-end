import * as Yup from 'yup';

import { EMAIL_PATTERN } from './regularExpressions';

export const schema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Число символов должно быть не менее 4')
    .matches(EMAIL_PATTERN, 'Некорректный email')
    .required('Обязательное для заполнения поле'),
});

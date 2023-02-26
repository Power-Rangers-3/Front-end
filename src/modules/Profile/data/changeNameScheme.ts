import * as Yup from 'yup';

export const scheme = Yup.object().shape({
  name: Yup.string().min(2, 'Число символов должно быть не менее 2').required('Введите имя пользователя'),
  fullname: Yup.string().min(2, 'Число символов должно быть не менее 2').required('Введите фамилию пользователя'),
});

import { nameValidation } from 'shared/validationRules/validationRules';
import * as Yup from 'yup';

export const scheme = Yup.object().shape({
  name: nameValidation,
  fullname: nameValidation,
});

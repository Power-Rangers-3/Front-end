import { yupResolver } from '@hookform/resolvers/yup';
import { isFormFilled } from 'modules/Auth/utils/isFormFilled';

import { SubmitHandler, useForm } from 'react-hook-form';

import { schema } from '../data/changePasswordScheme';
import styles from '../styles/styles.module.scss';
import { ChangePasswordType } from '../types';
import { Input } from '../UI';

export const NewPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ChangePasswordType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ChangePasswordType> = (data) => console.log(data); // TODO add logic on submit

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="currentPassword"
          label="Старый пароль"
          type="password"
          error={errors.currentPassword?.message}
        />
        <Input
          register={register}
          id="password"
          label="Новый пароль"
          type="password"
          error={errors.password?.message}
        />
        <Input
          register={register}
          id="passwordConfirm"
          label="Подтверждение нового пароля"
          type="password"
          error={errors.passwordConfirm?.message}
        />
      </div>
      <button
        type="button"
        className={styles.button}
        disabled={!!(Object.keys(errors).length || isFormFilled(getValues()))}
      >
        Сохранить
      </button>
    </form>
  );
};

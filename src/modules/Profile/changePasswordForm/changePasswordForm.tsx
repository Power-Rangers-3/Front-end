import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'modules/Auth/UI';
import { isFormFilled } from 'modules/Auth/utils/isFormFilled';
import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { getUser, useAppSelector } from 'store';

import { changePassword } from '../api/changePassword';

import { schema } from '../data/changePasswordScheme';
import styles from '../styles/styles.module.scss';
import { ChangePasswordType } from '../types/changePasswordType';

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

  const { email } = useAppSelector(getUser);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [errorPassword, setErrorPassword] = useState<string>();

  const onSubmit: SubmitHandler<ChangePasswordType> = (data) => {
    const querryParams = { email: email || '', password: data.currentPassword, newPassword: data.password };
    changePassword(querryParams)
      .then((response) => {
        setIsPasswordChanged(true);
        console.log(response);
      })
      .catch((error) => setErrorPassword(error.response.data.message));
  };

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
        type="submit"
        className={styles.button}
        disabled={!!(Object.keys(errors).length || isFormFilled(getValues()))}
      >
        Сохранить
      </button>
      {isPasswordChanged && <p className={styles.success}>Пароль успешно изменен</p>}
      {errorPassword && <p className={styles.error}>{errorPassword}</p>}
    </form>
  );
};

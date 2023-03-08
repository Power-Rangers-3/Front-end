import { yupResolver } from '@hookform/resolvers/yup';
import { isFormFilled } from 'modules/Auth/utils/isFormFilled';
import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { getUser, useAppSelector } from 'store';

import { changePassword } from '../api';

import { changePasswordScheme } from '../data';
import styles from '../styles/styles.module.scss';
import { ChangePasswordType } from '../types';
import { Input } from '../UI';

export const NewPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<ChangePasswordType>({
    mode: 'onChange',
    resolver: yupResolver(changePasswordScheme),
  });

  const { email } = useAppSelector(getUser);
  const [messageResponse, setMessageResponse] = useState<string>('');

  const onSubmit: SubmitHandler<ChangePasswordType> = (data) => {
    const querryParams = { email: email || '', password: data.currentPassword, newPassword: data.password };
    changePassword(querryParams)
      .then(({ message }) => {
        reset();
        setMessageResponse(message);
      })
      .catch((error) => setMessageResponse(error.response.data.message));
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
      {messageResponse && (
        <p className={messageResponse === 'success' ? styles.success : styles.error}>{messageResponse}</p>
      )}
    </form>
  );
};

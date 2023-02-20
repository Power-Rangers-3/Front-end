import { useForm } from 'react-hook-form';

import { SubmitHandler } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';

import { buttonStyles, Input } from '../UI';

import styles from '../styles.module.scss';

import { MailIcon, ErrorIcon } from '../assets';

import { isFormFilled } from '../utils/isFormFilled';

import { SignInUserType } from '../types';
import { schema } from '../data/emailScheme';

export const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignInUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [tokenError, setTokenError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<SignInUserType> = () => {
    setIsLoading(false);
    setTokenError('Тут будут ошибки');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Восстановить пароль</h3>
      <p> На указанный email будет отправленна ссылка для восстановления пароля</p>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          id="email"
          Icon={<MailIcon />}
          iconStart
          placeholder="Email"
          error={errors.email ? errors.email?.message : ''}
        />
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
        type="submit"
        disabled={!!(Object.keys(errors).length || isLoading || isFormFilled(getValues()))}
      >
        Отправить ссылку
      </button>
      {tokenError && (
        <p className={styles.registrationError}>
          <ErrorIcon />
          {tokenError}
        </p>
      )}
    </form>
  );
};

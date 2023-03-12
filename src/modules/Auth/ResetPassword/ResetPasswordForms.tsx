import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { buttonStyles, Input } from '../UI';

import styles from '../styles.module.scss';

import { MailIcon, ErrorIcon, PlaneIcon } from '../assets';

import { isFormFilled } from '../utils/isFormFilled';

import { schema } from '../data/emailScheme';

import { SendEmailRequestType } from '../types';

import { sendEmail } from '../api/sendEmail';

export const ResetPasswordForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<SendEmailRequestType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit: SubmitHandler<SendEmailRequestType> = () => {
    const requestParams = getValues();
    sendEmail(requestParams)
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        reset();
      })
      .catch((errorResponse) => {
        setIsLoading(false);
        setIsSuccess(false);
        setError(errorResponse.response.data.error);
      });
  };

  return !isSuccess ? (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3>Зaбыли свой пароль?</h3>
      <p> Мы вышлем вам сылку для восстановления пароля, если Ваша учетная запись существует</p>
      <div className={styles.inputGroupWrapper}>
        <Input
          register={register}
          label="Email адрес"
          id="email"
          Icon={<MailIcon />}
          iconStart
          placeholder="Email"
          error={errors.email?.message || null}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
          type="submit"
          disabled={!!(Object.keys(errors).length || isLoading || isFormFilled(getValues()))}
        >
          Отправить письмо
        </button>
        <Link to={ROUTE.SIGN_IN} className={styles.buttonSecondary}>
          Войти в систему
        </Link>
      </div>
      {error && (
        <p className={styles.error}>
          <ErrorIcon />
          {error}
        </p>
      )}
    </form>
  ) : (
    <form className={styles.form}>
      <h3>Восстановление пароля</h3>
      <p> Проверьте свою электронную почту для получения инструкций о том, как cбросить пароль</p>
      <p>
        <PlaneIcon /> {getValues().email}
      </p>

      <div className={styles.buttonWrapper}>
        <button
          className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
          type="button"
          onClick={() => setIsSuccess(false)}
        >
          Не видишь этого? Попробовать снова
        </button>
      </div>
    </form>
  );
};

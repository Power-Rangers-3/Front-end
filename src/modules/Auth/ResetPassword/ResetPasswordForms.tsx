import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { ROUTE } from 'router';

import { buttonStyles, Input } from '../UI';

import styles from '../styles.module.scss';

import { MailIcon, ErrorIcon, PlaneIcon } from '../assets';

import { isFormFilled } from '../utils/isFormFilled';

import { schema } from '../data/emailScheme';

export const ResetPasswordForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<{ email: string }>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [tokenError, setTokenError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(ROUTE.NEW_PASSWORD);
    }
  }, [token, navigate]);

  const onSubmit: SubmitHandler<{ email: string }> = () => {
    setIsLoading(false);
    setIsSuccess(!isSuccess);
    setTokenError('Тут будут отображаться ошибки');
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
          error={errors.email ? errors.email?.message : ''}
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
      {tokenError && (
        <p className={styles.registrationError}>
          <ErrorIcon />
          {tokenError}
        </p>
      )}
    </form>
  ) : (
    <form className={styles.form}>
      <h3>Восстановление пароля</h3>
      <p> Проверьте свою электронную почту для получения инструкций о том, как бросить пароль</p>
      <p>
        <PlaneIcon /> {getValues().email}
      </p>

      <div className={styles.buttonWrapper}>
        <button
          className={`${buttonStyles.button} ${buttonStyles.invertButton}`}
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          Не видишь этого? Попробовать снова
        </button>
      </div>
    </form>
  );
};
